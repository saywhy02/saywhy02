<template>
  <div style="margin:20px 20px 0 20px">
    <el-row :gutter="20">
			<el-col :span="24" :offset="0">
				<el-card shadow="always" :body-style="{ padding: '20px'}">
					<!-- card body -->
					<div>
						<el-form :inline="true" class="demo-form-inline" :model="form" ref="form"  size="normal">
							<el-form-item  label="图斑ID ">
								<el-input v-model="form.name"
								placeholder="请输入"
								type="text"
								maxlength="30"
								show-word-limit
								></el-input>
							</el-form-item>
							<el-form-item  label="池塘块命名 ">
								<el-input v-model="form.name"
								placeholder="请输入"
								type="text"
								maxlength="30"
								show-word-limit
								></el-input>
							</el-form-item>
							<el-form-item  label="镇街">
								  <el-select v-model="form.town" placeholder="选择镇街"
									@change="changeSelect">
										<el-option v-for="(item,index) in townOptions" :key="index" :label="item" :value="item"></el-option>
									</el-select>
							</el-form-item>
							<el-form-item  label="村居">
								  <el-select v-model="form.townObj" placeholder="选择村居">
										<el-option v-for="(item,index) in townObj" :key="index" :label="item" :value="item"></el-option>
									</el-select>
							</el-form-item>
							<el-form-item  label="所属主体 ">
								<el-input v-model="form.name"
								placeholder="请输入"
								type="text"
								maxlength="30"
								show-word-limit
								></el-input>
							</el-form-item>
							<el-form-item  label="地块类型">
								<el-cascader
                    v-model="options4.value"
                    :options="options4"
                    @change="handleChange1"
                >
                </el-cascader>
							</el-form-item>
							<el-form-item  label="农产品分类">
								<el-cascader
                    v-model="options5.value"
                    :options="options5"
                    @change="handleChange2"
                >
                </el-cascader>
							</el-form-item>
							<el-form-item  label="行业">
								<el-checkbox-group v-model="form.profession">
									<el-checkbox label="种植业" name="type"></el-checkbox>
									<el-checkbox label="渔业" name="type" checked="checked"></el-checkbox>
								</el-checkbox-group>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSubmit">查询</el-button>
								<el-button>重置</el-button>
							</el-form-item>
						</el-form>
					</div>
				</el-card>
			</el-col>
		</el-row>
    <el-row :gutter="20" style="margin-top:20px">
			<el-col :span="24" :offset="0">
				<el-card shadow="always" :body-style="{ padding: '20px' }">
					<!-- card body -->
					<div>
						<el-table
							:data="tableData"
							style="width: 116">
							<el-table-column
								prop="id"
								label="图斑ID"
								width="116">
							</el-table-column>
							<el-table-column
								prop="linkman"
								label="地塘块命名"
								width="116">
							</el-table-column>
							<el-table-column
								prop="town"
								label="镇街"
								width="116">
							</el-table-column>
							<el-table-column
								prop="village"
								label="村居"
								width="116">
							</el-table-column>
							<el-table-column
								prop="area"
								label="面积(亩)"
								width="116">
							</el-table-column>
							<el-table-column
								prop="type"
								label="地块类型"
								width="116">
							</el-table-column>
							<el-table-column
								prop="subject"
								label="所属主体"
								width="116">
							</el-table-column>
                            <el-table-column
								prop="classify"
								label="农场品分类"
								width="116">
							</el-table-column>
                            <el-table-column
								prop="varieties"
								label="品种"
								width="116">
							</el-table-column>
							<el-table-column
							align="center"
							:render-header="renderHeader">
								<template slot-scope="scope">
									<el-button
										size="mini"
										type="text"
										@click="handleCheck(scope.$index, scope.row)">查看</el-button>
								</template>
							</el-table-column>
						</el-table>
					</div>
					<div class="block" style="text-align:right;margin-top:20px">
						<el-pagination
							background
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							 layout="sizes, prev, pager, next, jumper"
							:total="1000">
						</el-pagination>
					</div>
				</el-card>
			</el-col>
		</el-row>
  </div>
</template>

<script>
export default {
  name: "ProductionInformationBase",
  data() {
    return {
         form: {
          name: '1',
          type: '1',
					town:'1',
					townObj:'1',
					address:'1',
          linkman: '1',
          number: '1',
          IDCard: '1',
					profession:[],
         },
      dialogFormVisible: false,
      townOptions:[
					"桂城街道",
					"九江镇",
					"西樵镇",
					"丹灶镇",
					"狮山镇",
					"大沥镇",
					"里水镇"
				],
      townObj:{
					"桂城街道":[
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
					"九江镇":[
						'11',
						'22',
						'33',
						'44',
						'55',
						'66',
						'77',
						'87',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
					"西樵镇":[
						'112',
						'221',
						'3123',
						'4123',
						'5',
						'611',
						'722',
						'82',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
					"丹灶镇":[
						'1',
						'2123',
						'3123',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14123',
						'15',
						'16',
					],
					"狮山镇":[
						'1',
						'2',
						'3',
						'4123',
						'5',
						'6123',
						'7',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
					"大沥镇":[
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7123',
						'8',
						'9',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
					"里水镇":[
						'1',
						'2123',
						'3',
						'41',
						'15',
						'61',
						'7111',
						'8',
						'9123',
						'10',
						'11',
						'12',
						'13',
						'14',
						'15',
						'16',
					],
				},
      options4: [{
          value: 'gendi',
          label: '耕地',
          children: [{
            value: 'handi',
            label: '旱地',
          }, {
            value: 'shuitian',
            label: '水田',
          },
          {
            value: 'qita',
            label: '其他',
          }]
        }, {
          value: 'yutang',
          label: '鱼塘',
          children: [{
            value: 'yutang',
            label: '鱼塘',
          }]
        }, {
          value: 'yuandi',
          label: '园地',
          children: [{
            value: 'guoyuan',
            label: '果园'
          }, {
            value: 'chayuan',
            label: '茶园'
          }]
        },{
          value: 'lindi',
          label: '林地',
          children: [{
            value: 'lindi',
            label: '林地'
          }]
        },{
          value: 'caodi',
          label: '草地',
        },{
          value: 'chenzhen',
          label: '城镇村及工矿用地',
          children: [{
            value: 'chenzhen',
            label: '城镇村及工矿用地'
          }]
        },{
          value: 'jiaotong',
          label: '交通运输用地',
          children: [{
            value: 'jiaotong',
            label: '交通运输用地'
          }]
        },{
          value: 'shuiyu',
          label: '水域及水利设施',
          children: [{
            value: 'shuiyu',
            label: '水域及水利设施'
          }]
        },{
          value: 'qitatu',
          label: '其他土地',
          children: [{
            value: 'qitatu',
            label: '其他土地'
          }]
        },
        
        ],
      options5: [{
          value: 'liangyou',
          label: '粮油',
          children: [{
            value: 'liangshi',
            label: '粮食',
            children:[
                {
                    value:'xiaomai',
                    label:'小麦'
                },{
                    value:'daogu',
                    label:'稻谷'
                },{
                    value:'yumi',
                    label:'玉米'
                },
            ]
          }, {
            value: 'zaliang',
            label: '杂粮',
            children:[
                {
                    value:'gaoliang',
                    label:'高粱'
                },{
                    value:'qiaomai',
                    label:'荞麦'
                },{
                    value:'yanmai',
                    label:'燕麦'
                },{
                    value:'damai',
                    label:'大麦(含青稞)'
                },{
                    value:'huangmi',
                    label:'黄米'
                },{
                    value:'yiren',
                    label:'薏仁'
                },{
                    value:'guzi',
                    label:'谷子'
                },{
                    value:'mizi',
                    label:'糜子(糜米)'
                },
            ]
          },
          {
            value: 'doulei',
            label: '豆类',
          }, {
            value: 'youliao',
            label: '油料',
          }]
        }, {
          value: 'yutang',
          label: '鱼塘',
          children: [{
            value: 'yutang',
            label: '鱼塘',
          }]
        }, {
          value: 'yuandi',
          label: '园地',
          children: [{
            value: 'guoyuan',
            label: '果园'
          }, {
            value: 'chayuan',
            label: '茶园'
          }]
        },{
          value: 'lindi',
          label: '林地',
          children: [{
            value: 'lindi',
            label: '林地'
          }]
        },{
          value: 'caodi',
          label: '草地',
        },{
          value: 'chenzhen',
          label: '城镇村及工矿用地',
          children: [{
            value: 'chenzhen',
            label: '城镇村及工矿用地'
          }]
        },{
          value: 'jiaotong',
          label: '交通运输用地',
          children: [{
            value: 'jiaotong',
            label: '交通运输用地'
          }]
        },{
          value: 'shuiyu',
          label: '水域及水利设施',
          children: [{
            value: 'shuiyu',
            label: '水域及水利设施'
          }]
        },{
          value: 'qitatu',
          label: '其他土地',
          children: [{
            value: 'qitatu',
            label: '其他土地'
          }]
        },
        
        ],
      tableData: [{
            id: '2016-05-02',
            linkman: '王小虎',
            town: '上海市普陀区金沙江路 1518 弄',
            village:'123',
            area:'123',
            type:'123',
            village:'4560',
            classify:'789',
            varieties:'456',
            subject:"123"
          },{
            id: '2016-05-02',
            linkman: '王小虎',
            town: '上海市普陀区金沙江路 1518 弄',
            village:'123',
            area:'123',
            type:'123',
            village:'4560',
            classify:'789',
            varieties:'456',
            subject:"123"
          }, {
            id: '2016-05-02',
            linkman: '王小虎',
            town: '上海市普陀区金沙江路 1518 弄',
            village:'123',
            area:'123',
            type:'123',
            village:'4560',
            classify:'789',
            varieties:'456',
            subject:"123"
          }, {
            id: '2016-05-02',
            linkman: '王小虎',
            town: '上海市普陀区金沙江路 1518 弄',
            village:'123',
            area:'123',
            type:'123',
            village:'4560',
            classify:'789',
            varieties:'456',
            subject:"123"
          }],
    };
  },
  methods:{
    changeSelect(){
				for(const k in this.townOptions){
					if(this.form.town===this.townOptions[k]){
						this.typeOptions = this.townObj[this.form.town]
					}
				}
			},
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleClick(row) {
        console.log(  row.ID);
        this.dialogFormVisible = true
      },
      handleChange1(value) {
        console.log(value);
      },
      handleChange2(value) {
        console.log(value);
      },
      renderHeader(h){
          return(
              <div>
                <el-button type="primary" size="default" >导出Excel</el-button>
              </div>
          )
      },
      onSubmit(){

            },
  },
}
</script>

<style>
.is-leaf .cell{
  padding-left: 0px !important;
}
</style>