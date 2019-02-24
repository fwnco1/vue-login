<template>
  <div class="allReceiver-container">

    <el-table :data="ReceiverList" style="width: 100%">
      <el-table-column prop="id" label="用户ID" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tableData3: [{
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // } ],
      ReceiverList: []
    };
  },
  methods: {
    //获取所有的收件人信息
    getReceiverList() {
      //根据接口要求,先要获取token
      let token = localStorage.getItem("token") || "";
      this.$http
        // .get("/users/getReceiverAddress", { headers: { Authorization: token } })
        //因为我们已经在请求拦截中添加了请求头的设置了config.headers.Authorization = token 
        //所以此处可以省略get请求所需带的参数设置
        .get("/users/getReceiverAddress") 
        .then(res => {
          // console.dir(res);
          this.$message({
            showClose: true,
            type: "success",
            // message: res.data.succMsg 响应拦截中设置了response = response.data
             message: res.succMsg
          });
          // this.ReceiverList = res.data.data;响应拦截中设置了response = response.data
          this.ReceiverList = res.data
          // console.log(this.ReceiverList);
        })
        .catch(err => {
          // console.dir(err);
          this.$message({
            showClose: true,
            type: "error",
            message: err.response.data.errMsg
          });
        });
    }
  },
  created() {
    this.getReceiverList();
  }
};
</script>

<style lang="less" >
    .allReceiver-container{
      .title{
          display: flex;
           p{
          margin: 20px 0;
          font-size: 22px;
        }
        button{
          height: 30px;
          text-align: center;
          margin-top: 15px;
          line-height: 30px;
          padding: 0 15px;
          margin-left: 20px;
        }
      }
      
      
       
    }
</style>
