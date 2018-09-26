// echars
import echarts from 'echarts';
const EcharsStatistics = ({echars_box}) => {
// 基于准备好的dom，初始化echarts实例
	const myChart = echarts.init(document.getElementById(echars_box));
	window.addEventListener('resize', myChart.resize);

	const option = {
		backgroundColor: '#fff',
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: '#f1f1f1'
				}
			},
			textStyle: {
				color: '#4c4c4c'
			},
			padding: [15, 10],
			borderWidth: 1,
			borderColor: '#f1f1f1',
			backgroundColor: '#f8f9fb',
		},
		legend: {
			icon: 'rect',
			itemWidth: 20,
			itemHeight: 12,
			itemGap: 13,
			orient: 'vertical',
			data: ['今日访问数量', '今日留言数量', '新增用户数量'],
			right: '2%',
			top: '10%',
			textStyle: {
				fontSize: 12,
				color: '#4c4c4c'
			}
		},
		grid: {
			left: '3%',
			right: '15',
			bottom: '50',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			splitNumber: 20,
			axisLine: {
				lineStyle: {
					color: '#c1c1c1',
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#f1f1f1',
					type: 'dotted'
				}
			},
			data: ['2017年5月1日', '2017年5月2日', '2017年5月3日', '2017年5月4日', '2017年5月5日', '2017年5月6日', '2017年5月7日', '2017年5月8日', '2017年5月9日', '2017年5月10日', '2017年5月11日', '2017年5月12日',
				'2017年5月13日', '2017年5月14日', '2017年5月15日', '2017年5月16日', '2017年5月17日', '2017年5月18日', '2017年5月19日', '2017年5月20日', '2017年5月21日', '2017年5月22日', '2017年5月23日', '2017年5月25日'
				, '2017年5月25日', '2017年5月26日', '2017年5月27日', '2017年5月28日', '2017年5月29日', '2017年5月30日'
			],
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#dedede'
				}
			},
			splitNumber: 10,
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 13
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#f1f1f1'
				}
			}
		}],
		dataZoom: [
			{
				show: true,
				realtime: true,
				start: 0,
				end: 100
			},
			{
				type: 'inside',
				realtime: true,
				start: 0,
				end: 100
			}
		],
		series: [{
			name: '今日访问数量',
			type: 'line',
			smooth: false,
			lineStyle: {
				normal: {
					width: 3,
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#fed919' // 0% 处的颜色
						}, {
							offset: 1, color: '#f29700' // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			},
			itemStyle: {
				normal: {
					color: '#f29700'
				},
			},
			data: [14.3, 96.4, 97.5, 95.6, 98.1, 900, 100, 94.1, 80.1, 52.4, 175.8, 94.7, 14, 25
				, 58.0, 5, 47, 120, 3.0, 78, 52.4, 75.8, 69, 52.4, 75.8, 94.7, 74, 96, 5, 54]
		},
			{
				name: '今日留言数量',
				type: 'line',
				smooth: false,
				lineStyle: {
					normal: {
						width: 3,
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#f66e54' // 0% 处的颜色
							}, {
								offset: 1, color: '#db4747' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#f66e54'
					},
				},
				data: [96.3, 96.4, 97.5, 95.6, 98.1, 700, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7, 14, 25
					, 58.0, 5, 47, 120, 3.0, 25, 52.4, 75.8, 94.7, 52.4, 75.8, 94.7, 0, 0, 0, 54]
			},
			{
				name: '新增用户数量',
				type: 'line',
				smooth: false,
				lineStyle: {
					normal: {
						width: 3,
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#1ca9e1' // 0% 处的颜色
							}, {
								offset: 1, color: '#1c6be1' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				},
				itemStyle: {
					normal: {
						color: '#1ca9e1'
					},
				},
				data: [96.3, 96.4, 97.5, 100, 98.1, 600, 189.6, 36, 80.1, 52.4, 75.8, 94.7, 14, 25
					, 58.0, 5, 47, 850, 36, 25, 52.4, 110, 94.7, 152.4, 75.8, 94.7, 0, 0, 0, 54]
			}]
	};

// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
};

export default EcharsStatistics;