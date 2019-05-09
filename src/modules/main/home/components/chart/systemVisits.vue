<template>
  <div class="system-visits">
    <i-echarts class="pie-chart"
      :resizable="true"
      :notMerge="true"
      :option="pieOption"></i-echarts>
    <i-echarts class="barChart"
      :resizable="true"
      :notMerge="true"
      :option="barOption"></i-echarts>
    <div class="system-visits__title">{{name}}</div>
  </div>
</template>

<script>
import echartConfig from '../../../../../mixin/echartConfig.js'
export default {
  mixins: [echartConfig],
  props: {
    studentVisits: Number,
    teacherVisits: Number,
    name: String
  },
  computed: {
    pieOption() {
      return {
        tooltip: {
          trigger: 'item',
          formatter: params => {
            return params.marker + ' ' + params.name + '：' + params.value
          }
        },
        grid: {
          left: '0%',
          right: '0%'
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            // center: ['50%', '50%'],
            color: ['#F3A43B', '#60C0DD'],
            data: [
              {
                value: this.studentVisits,
                name: '学生访问人数'
              },
              {
                value: this.teacherVisits,
                name: '教师访问人数'
              }
            ],
            // radius: '70%',
            // roseType: 'radius',

            label: {
              normal: {
                formatter: ['{b|{b}}', '{c|{c}次}'].join('\n'),
                rich: {
                  b: {
                    color: '#E87C25',
                    fontSize: 15,
                    height: 40
                  },
                  c: {
                    color: '#26C0C0',
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: 5
                  }
                }
              }
            },
            labelLine: {
              normal: {
                smooth: 0,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 10
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: () => {
              return Math.random() * 200
            }
          }
        ]
      }
    },
    barOption() {
      return {
        tooltip: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: ['总访问人数', '学生访问人数', '教师访问人数']
          }
        ],
        grid: {
          left: '0%',
          right: '0%'
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: '顶部圆圈',
            type: 'pictorialBar',
            symbolSize: [50, 32],
            symbolOffset: [0, -15],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: this.visitsList.map(item => {
              return { symbolPosition: 'end', value: item }
            })
          },
          {
            name: '底部内圈',
            type: 'pictorialBar',
            symbolSize: [50, 30.9],
            symbolOffset: [0, 15],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: this.visitsList
          },
          {
            name: '底部中圈',
            type: 'pictorialBar',
            symbolSize: [82, 50.676],
            symbolOffset: [0, 28],
            z: 11,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderWidth: 5
              }
            },
            data: this.visitsList
          },
          {
            name: '底部外圈',
            type: 'pictorialBar',
            symbolSize: [120, 75],
            symbolOffset: [0, 40],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: '#14b1eb',
                borderType: 'dashed',
                borderWidth: 5
              }
            },
            data: this.visitsList
          },
          {
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#14b1eb',
                opacity: 0.7,
                label: {
                  show: true,
                  position: 'top',
                  distance: 17,
                  formatter: '{b}\n{c}',
                  color: '#000'
                }
              }
            },
            silent: true,
            barWidth: 50,
            barGap: '-100%',
            data: this.visitsList
          }
        ]
      }
    },

    barOption2() {
      return {
        tooltip: {},
        grid: {
          // top: '5%'
        },
        legend: {
          right: '10%',
          top: '5%',
          textStyle: {
            color: '#fff',
            fontSize: 24
          }
        },
        xAxis: {
          data: ['总访问人数', '学生访问人数', '教师访问人数'], //横坐标
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
            // rotate: 25,
            // textStyle: {
            //   color: '#fff',
            //   fontSize: 24
            // }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              // color: '#fff',
              width: '1  ' //坐标线的宽度
            }
          }
        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
              color: '#40A1EA', //网格横线颜色
              width: 1,
              type: 'solid'
            }
          },
          axisLabel: {
            textStyle: {
              // color: '#fff'
              // fontSize: 24 //坐标值得具体的颜色
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 50,
            data: this.visitsList, //数据
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            }
          }
        ]
      }
    },

    totalVisits() {
      return this.studentVisits + this.teacherVisits
    },
    visitsList() {
      return [this.totalVisits, this.studentVisits, this.teacherVisits]
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.system-visits {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid #aaa;
  border-radius: 6px;
  padding: 50px 10px 10px;
  box-sizing: border-box;
  &__title {
    position: absolute;
    right: 0;
    left: 0;
    text-align: center;
    top: 10px;
    font-size: 24px;
  }
}
.pie-chart {
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  box-sizing: border-box;
  box-shadow: #aaa;
  &::after {
  }
  &:hover {
    // border: 1px solid #000;
  }
}
.barChart {
  width: 50%;
  height: 100%;
  // border: 1px solid #000;
}
</style>
