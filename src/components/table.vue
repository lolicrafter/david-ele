<template>
  <div>
    <el-table
        :data="finalData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">
      <el-table-column
          v-for="item in tableColumnProps"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TablePage',
  data() {
    return {
      tableColumnProps: [
        {
          prop: 'id',
          label: 'ID',
        },
        {
          prop: 'chineseName',
          label: '商品名',
        },
        {
          prop: 'styleName',
          label: '款式',
        },
        {
          prop: 'sizeName',
          label: '尺码',
        }
      ],
      data: [
        {
          id: 1,
          chineseName: 'cxk同款卫衣',
          styleList: [{styleName: '唱'}, {styleName: '跳'}, {styleName: 'rap'}],
          sizeList: [{sizeName: 'M'}]
        },
        {
          id: 2,
          chineseName: 'gqq同款兵法',
          styleList: [{styleName: 'rap'}, {styleName: '孙子兵法'}],
          sizeList: [{sizeName: 'S'}, {sizeName: 'L'}]
        }
      ],
    };
  },

  computed: {
    //  格式化后端返回的商品数据：
    finalData() {
      const data = []
      this.data.map((item) => {
        const {id, chineseName} = item
        item.styleList.map(({styleName}) => {
          item.sizeList.map(({sizeName}) => {
            data.push({
              id,
              chineseName,
              styleName,
              sizeName
            })
          })
        })
      })
      return data
    }
  },
  methods: {
    objectSpanMethod({rowIndex, columnIndex}) {
      const mergingRows = (tableData, prop) => {
        // 表格数据列合并预处理,生成一个与行数相同的数组记录每一行设置的合并数
        // 如果是第一条记录（索引为0），向数组中加入1，并设置索引位置；
        // 如果不是第一条记录，则判断它与前一条记录是否相等，如果相等，
        // 则向mergingRows中添入元素0，并将前一位元素+1，表示合并行数+1，
        // 以此往复，得到所有行的合并数，0即表示该行不显示。
        const mergingRows = []
        let mergingPos = 0
        for (let i = 0; i < tableData.length; i++) {
          // tableData 表格数据源
          if (i === 0) {
            mergingRows.push(1)
            mergingPos = 0
          } else {
            if (prop === 'amount1') {
              console.log(tableData[i][prop], tableData[i - 1][prop], tableData[i][prop] === tableData[i - 1][prop])
            }
            if (tableData[i].id === tableData[i - 1].id && tableData[i][prop] === tableData[i - 1][prop]) {
              // 哪些数据是要合并的 合并的条件是什么 此处合并条件为id相同且[prop]值相同则进行合并
              mergingRows[mergingPos] += 1
              mergingRows.push(0)
            } else {
              mergingRows.push(1)
              mergingPos = i
            }
          }
        }
        return mergingRows
      }
      // tableColumnProps是表格prop的数组
      const mergingResults = this.tableColumnProps.map(item => mergingRows(this.finalData, item.prop))
      let arr = this.tableColumnProps.map((item, index) => mergingResults[index])
      // 对于arr后面没有进行描述的列采取不进行行合并
      if (columnIndex >= arr.length) return
      const _row = arr[columnIndex][rowIndex]
      const _col = _row > 0 ? 1 : 0
      return {
        rowspan: _row,
        colspan: _col
      }
    },

  }
};
</script>
