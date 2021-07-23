<template>
  <div class="Home" align='center'>
    <table>
    <tr>
      <td class="In-addfrom">
        <div align='center'>
        <income-expense-add-form></income-expense-add-form>
        </div>
      </td>
      <td class="In-table">
        <income-expense-table></income-expense-table>
      </td>
    </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import IncomeExpenseTable from '@/components/IncomeExpenseTable.vue'
import IncomeExpenseAddForm from '@/components/IncomeExpenseAddForm.vue'

export default {
  name: 'IncomeExpenseAccount',
  components: {
    HelloWorld,
    IncomeExpenseTable,
    IncomeExpenseAddForm
  }
}
</script>

<style lang="scss">
div.Home{
  // background-image: url(../../public/background.jpg);
  background-size: cover;
}
</style>
