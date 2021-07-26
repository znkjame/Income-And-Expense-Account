<template>
    <div class="Table">
        <table>
            <thead>
                <tr>
                    <th class="number">ลำดับที่</th>
                    <th class="date">วันที่</th>
                    <th class="type">ประเภท</th>
                    <th class="price">จำนวนเงิน</th>
                    <th class="details">รายละเอียด</th>
                    <th class="total">ยอดคงเหลือ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(incomeExpense,index) in incomeExpense" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ incomeExpense.date }}</td>
                    <td>{{ incomeExpense.type }}</td>
                    <td>{{ incomeExpense.price }}</td>
                    <td>{{ incomeExpense.details }}</td>
                    <td>{{ incomeExpense.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import IncomeExpenseStore from '@/store/IncomeExpense.js'
export default {
    data(){
        return {
            incomeExpense:[],
            editIndex: -1,
            form: {
                date: '',
                type: '',
                price: '',
                details: '',
                total:''
            },
            balance: 0,
            totalIncome:0,
            totalExpense:0,
            totalLeft:0
        }
    },
    created(){
        this.fetchIncomeExpense();
    },
    methods: {
        async fetchIncomeExpense(){
            await IncomeExpenseStore.dispatch('fetchIncomeExpense')
            this.incomeExpense = IncomeExpenseStore.getters.incomeExpense
        },
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@300&display=swap');
$primary-font: 'Mitr', sans-serif;
$primary-color: #800000;
$secondary-color: #FD6060;
div.Table{
    align-items: center;
    margin-left: 200px;
    font-family: $primary-font;
    font-size: 18px;
}
th, td{
    padding: 10px;
}
th{
    background-color: $primary-color;
    color: white;
}
tbody tr td{
    background-color: #e1ded8;
}
</style>