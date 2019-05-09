<template>
  <i-echarts class="chart"
    :resizable="true"
    :notMerge="true"
    :option="powerOption"></i-echarts>
</template>

<script>
import echartConfig from '../../../../../mixin/echartConfig.js'
export default {
  mixins: [echartConfig],
  props: {
    title: String,
    xAxisList: Array,
    name: String,
    seriesValueList: Array
  },
  computed: {
    powerOption() {
      return {
        // backgroundColor: '#0f375f',
        title: {
          text: this.title,
          x: 'center',
          textStyle: {
            color: '#666'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        dataRange: {
          show: false,
          min: 0,
          max: 12,
          calculable: true,
          // color: this.colorList.filter((item, index) => {
          //   return index % 3 === 0
          // }),
          // color: ['#60C0DD'],
          y: 'center'
        },

        xAxis: [
          {
            type: 'category',
            show: true,
            boundaryGap: true,
            axisLine: {
              lineStyle: {
                color: '#fff',
                type: 'dashed',
                width: 1
              }
            },
            axisLabel: {
              margin: 14,
              color: '#fff'
            },
            splitLine: {
              lineStyle: {
                color: '#14c8d4',
                type: 'dashed'
              }
            },
            data: this.xAxisList
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: true,
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              color: '#fff'
            },
            splitLine: {
              lineStyle: {
                color: '#14c8d4',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: this.name,
            type: 'bar',
            barWidth: '40%',
            // itemStyle: {
            //   normal: {
            //     color: params => {
            //       return this.colorList[params.dataIndex]
            //     },
            //     label: {
            //       show: true,
            //       position: 'top',
            //       formatter: '{b}\n{c}',
            //       color: '#000'
            //     },
            //     shadowBlur: 10,
            //     shadowColor: 'rgba(96, 192, 221, 0.5)'
            //   }
            // },
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   {
                //     offset: 0,
                //     color: '#14c8d4'
                //   },
                //   {
                //     offset: 1,
                //     color: '#43eec6'
                //   }
                // ])
                // color: '#43eec6',
                color: params => {
                  console.log(params)
                  return {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#000' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#D1913C' // 100% 处的颜色
                      }
                    ],
                    globalCoord: false // 缺省为 false
                  }
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}',
                  color: '#fff'
                }
              }
            },
            data: this.seriesValueList
          }
        ]
      }
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
  border: 1px solid #2288b796;
  background-color: rgba(0, 57, 90, 0.3);
  box-sizing: border-box;

  border-radius: 6px;
}
</style>

