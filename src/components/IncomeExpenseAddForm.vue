<template>
  <div class="Form" align='left'>
      <h3>โปรดใส่รายละเอียด</h3>
      <table class="tableForm">
          <tr>
            <td>
      <!-- <div class="date"> -->
            <label for="date">วันที่ :</label>
             </td>
            <td>
            <input type="date" v-model="from.date">
            </td>
      <!-- </div> -->
          </tr>
            <tr>
            <td><label for="type">ประเภท : </label></td>
            <td>    
            <input type="radio" name="type" v-model="from.type" value="income">
            <label for="income">รายรับ</label>
            <input type="radio" name="type" v-model="from.type" value="expense">
            <label for="income">รายจ่าย</label>
            </td>
            </tr>
      <!-- </div> -->

      <tr>
          <td><label for="price">จำนวนเงิน : </label></td>
          <td><input type="number" min="0" v-model="from.price"></td>
      </tr>

      <tr>
          <td><label for="details">รายละเอียด  </label></td>
      </tr>
      </table>
      <div class="inputDetail" align="center"><textarea type="text" name="datails" v-model="from.details"> </textarea></div>
      <div class="button" align='center'>
          <button @click="addIncomeExpense">Add</button>
      </div>
      <div>
          <div>รายรับทั้งหมด : {{totalIncome}}</div>
          <div>รายจ่ายทั้งหมด : {{totalExpense}}</div>
          <div>คงเหลือทั้งหมด : {{totalLeft}}</div>
      </div>
  </div>
</template>

<script>
import IncomeExpenseStore from '@/store/IncomeExpense.js'

export default {
    data(){
        return{
            incomeExpense:[],
            from: {
                date:'',
                type:'',
                price: 0,
                details:'',
                total:0
            },
            balance:0,
            totalIncome:0,
            totalExpense:0,
            totalLeft:0
        }
    },
    methods:{
        addIncomeExpense(){
            this.calTotal();
            let payload = {
                date: this.from.date,
                type: this.from.type,
                price: this.from.price,
                details: this.from.details,
                total: this.from.total,
            }
            IncomeExpenseStore.dispatch('addNewIncomeExpense',payload)
            this.updateTotalIncomeExpense();
            this.clearForm();
        },
        clearForm(){
            this.from = {
                date:'',
                type:'',
                price:0,
                details:''
            }
        },
        calTotal(){
            if(this.from.type == 'income'){
                
                this.from.total = this.balance + parseInt(this.from.price)
                
            }
            else{
                this.from.total = this.balance- parseInt(this.from.price)
            }
            this.balance = this.from.total
        },
        async fetchIncomeExpense(){
            await IncomeExpenseStore.dispatch('fetchIncomeExpense')
            this.incomeExpense = IncomeExpenseStore.getters.incomeExpense
            this.updateTotal();
        },
        updateTotal(){
                this.incomeExpense.forEach(element => {
                this.balance = element.total
                 if(element.type == 'income'){
                    this.totalIncome+= element.price
                }
                else{
                    this.totalExpense+= element.price
                }
            });
            this.totalLeft = this.totalIncome - this.totalExpense
        },
        updateTotalIncomeExpense(){
            if(this.from.type == 'income'){
                this.totalIncome += parseInt(this.from.price)
            }
            else{
                this.totalExpense += parseInt(this.from.price) 
            }
            this.totalLeft = this.totalIncome - this.totalExpense
        }
    },
    created(){
        this.fetchIncomeExpense()
        
    }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap');
$primary-font: 'Mitr', sans-serif;
$primary-color: #800000;
$secondary-color: #FD6060;
$third-color: #e1ded8;
div.Form{
    display: block;
    font-family: $primary-font;
    font-size: 20px;
    background-color: $third-color;
    // color: white;
}
// .date
// {
    
//     padding-right: 10px;
// }
h3{
    background-color: $primary-color;
    color: white;
}
table.tableForm{
    background-color: $third-color;
}
div.button{
    padding-bottom: 15px;
}
div.button button{
    font-family: $primary-font;
    font-size: 16px;
    color: white;
    background-color: $primary-color;
    border-radius: 10px;
    width: 100px;
}
div.inputDetail textarea{
    width: 250px;
    height: 50px;
    
}
label{
    font-weight: bold;
}
</style>
