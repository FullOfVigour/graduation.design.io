import $ from 'jquery'
$(document).ready(function() {
  var $demo = $('.demo')
  var $path = $('.s-path')
  var $sCont = $('.sidebar-content')
  //    var $chat = $('.chat')
  var demoTop = $demo.offset().top
  var demoLeft = $demo.offset().left
  var diffX = 0
  var curX = 0
  var finalX = 0
  var frame = 1000 / 60
  var animTime = 600
  var sContTrans = 200
  var animating = false

  var easings = {
    smallElastic: function(t, b, c, d) {
      var ts = (t /= d) * t
      var tc = ts * t
      return (
        b + c * (33 * tc * ts + -106 * ts * ts + 126 * tc + -67 * ts + 15 * t)
      )
    },
    inCubic: function(t, b, c, d) {
      var tc = (t /= d) * t * t
      return b + c * tc
    }
  }

  function createD(top, ax, dir) {
    return 'M0,0 ' + top + ',0 a' + ax + ',250 0 1,' + dir + ' 0,500 L0,500'
  }

  var startD = createD(50, 0, 1)
  var midD = createD(125, 75, 0)
  var finalD = createD(200, 0, 1)
  var clickMidD = createD(300, 80, 0)
  var clickMidDRev = createD(200, 100, 1)
  var clickD = createD(300, 0, 1)
  var currentPath = startD

  function newD(num1, num2) {
    var d = $path.attr('d')
    num2 = num2 || 250
    var nd = d.replace(/\ba(\d+),(\d+)\b/gi, 'a' + num1 + ',' + num2)
    return nd
  }

  function animatePathD(path, d, time, handlers, callback, easingTop, easingX) {
    var steps = Math.floor(time / frame)
    var curStep = 0
    var oldArr = currentPath.split(' ')
    var newArr = d.split(' ')
    // var oldLen = oldArr.length
    // var newLen = newArr.length
    var oldTop = +oldArr[1].split(',')[0]
    var topDiff = +newArr[1].split(',')[0] - oldTop
    var nextTop
    var nextX
    easingTop = easings[easingTop] || easings.smallElastic
    easingX = easings[easingX] || easingTop

    $(document).off('mousedown mouseup')

    function animate() {
      curStep++
      nextTop = easingTop(curStep, oldTop, topDiff, steps)
      nextX = easingX(curStep, curX, finalX - curX, steps)
      oldArr[1] = nextTop + ',0'
      oldArr[2] = 'a' + Math.abs(nextX) + ',250'
      oldArr[4] = nextX >= 0 ? '1,1' : '1,0'
      $path.attr('d', oldArr.join(' '))
      if (curStep > steps) {
        curX = 0
        diffX = 0
        $path.attr('d', d)
        currentPath = d
        if (handlers) handlers1()
        if (callback) callback()
        return
      }
      requestAnimationFrame(animate)
    }
    animate()
  }

  function handlers1() {
    $(document).on('mousedown touchstart', '.s-path', function(e) {
      var startX = e.pageX || e.originalEvent.touches[0].pageX

      $(document).on('mousemove touchmove', function(e) {
        var x = e.pageX || e.originalEvent.touches[0].pageX
        diffX = x - startX
        if (diffX < 0) diffX = 0
        if (diffX > 300) diffX = 300
        curX = Math.floor(diffX / 2)
        $path.attr('d', newD(curX))
      })
    })

    $(document).on('mouseup touchend', function() {
      $(document).off('mousemove touchmove')
      if (animating) return
      if (!diffX) return
      if (diffX < 40) {
        animatePathD($path, newD(0), animTime, true)
      } else {
        animatePathD($path, finalD, animTime, false, function() {
          $sCont.addClass('active')
          setTimeout(function() {
            $(document).on('click', closeSidebar)
          }, sContTrans)
        })
      }
    })
  }

  handlers1()

  function closeSidebar(e) {
    if (
      $(e.target).closest('.sidebar-content').length ||
      $(e.target).closest('.chat').length
    ) {
      return
    }
    if (animating) return
    animating = true
    $sCont.removeClass('active')
    //      $chat.removeClass('active')
    $('.cloned').addClass('removed')
    finalX = -75
    setTimeout(function() {
      animatePathD(
        $path,
        midD,
        animTime / 3,
        false,
        function() {
          //            $chat.hide()
          $('.cloned').remove()
          finalX = 0
          curX = -75
          animatePathD($path, startD, (animTime / 3) * 2, true)
          animating = false
        },
        'inCubic'
      )
    }, sContTrans)

    $(document).off('click', closeSidebar)
  }

  function moveImage(that) {
    var $img = $(that).find('.contact__photo')
    var top = $img.offset().top - demoTop
    var left = $img.offset().left - demoLeft
    var $clone = $img.clone().addClass('cloned')

    $clone.css({ top: top, left: left })
    $demo.append($clone)
    $clone.css('top')
    $clone.css({ top: '1.8rem', left: '25rem' })
  }

  function ripple(elem, e) {
    var elTop = elem.offset().top
    var elLeft = elem.offset().left
    var x = e.pageX - elLeft
    var y = e.pageY - elTop
    var $ripple = $("<div class='ripple'></div>")
    $ripple.css({ top: y, left: x })
    elem.append($ripple)
  }

  $(document).on('click', '.contact', function(e) {
    if (animating) return
    animating = true
    $(document).off('click', closeSidebar)
    var that = this
    var name = $(this)
      .find('.contact__name')
      .text()
    var online = $(this)
      .find('.contact__status')
      .hasClass('online')
    $('.chat__name').text(name)
    $('.chat__online').removeClass('active')
    if (online) $('.chat__online').addClass('active')
    ripple($(that), e)
    setTimeout(function() {
      $sCont.removeClass('active')
      moveImage(that)
      finalX = -80
      setTimeout(function() {
        $('.ripple').remove()
        animatePathD(
          $path,
          clickMidD,
          animTime / 3,
          false,
          function() {
            curX = -80
            finalX = 0
            animatePathD(
              $path,
              clickD,
              (animTime * 2) / 3,
              true
              //                function() {
              //                  $chat.show()
              //                  $chat.css('top')
              //                  $chat.addClass('active')
              //                  animating = false
              //                }
            )
          },
          'inCubic'
        )
      }, sContTrans)
    }, sContTrans)
  })

  $(document).on('click', '.chat__back', function() {
    if (animating) return
    animating = true
    //      $chat.removeClass('active')
    $('.cloned').addClass('removed')
    setTimeout(function() {
      $('.cloned').remove()
      //        $chat.hide()
      finalX = 100
      animatePathD(
        $path,
        clickMidDRev,
        animTime / 3,
        false,
        function() {
          curX = 100
          finalX = 0
          animatePathD($path, finalD, (animTime * 2) / 3, true, function() {
            $sCont.addClass('active')
            $(document).on('click', closeSidebar)
            animating = false
          })
        },
        'inCubic'
      )
    }, sContTrans)
  })

  $(window).on('resize', function() {
    demoTop = $demo.offset().top
    demoLeft = $demo.offset().left
  })
})
export default function moveImage(that, demoTop, demoLeft, $demo) {
  var $img = $(that).find('.contact__photo')
  var top = $img.offset().top - demoTop
  var left = $img.offset().left - demoLeft
  var $clone = $img.clone().addClass('cloned')

  $clone.css({ top: top, left: left })
  $demo.append($clone)
  $clone.css('top')
  $clone.css({ top: '1.8rem', left: '25rem' })
}
