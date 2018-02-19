<template>
  <div class="container">
      <span class="btnClass">
         <router-link to="/addcontacts">Create Contact</router-link>
       </span>
      <h1> list of contacts </h1>
      <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Edit Contact</th>
          </tr>
          <tr v-for="contact, index in contacts">
              <td> {{ contact.name }} </td>
              <td> {{ contact.email }} </td>
              <td> {{ contact.phone }} </td>
              <td> {{ contact.address }} </td>
              <td> <router-link :to="{name : 'EditContact', params : {id : index + 1 || 0}}">Edit Contact</router-link>
              </td>
          </tr>
      </table>

  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data () {
    return {
      contacts: [],
      newcontact: {}
    }
  },
  created: function() {
    this.contacts = JSON.parse(Vue.ls.get('contacts')) || [];
  }

}
</script>

<style scoped>
   .container{
      width: 900px;
      display: block;
      margin: 20px auto;
      box-shadow: 0px 2px 14px rgba(15, 117, 49, 0.28);
      padding: 35px 25px;
   }
   span.btnClass{
      line-height: 40px;
      max-width: 200px;
      width: 200px;
      background-color: #003366;
      border: 1px solid #001a33;
      color: #fff;
      font-size: 18px;
      float: right;
      text-align: center;
   }
   span.btnClass a{
      color: #fff;
      font-size: 18px;
      text-decoration: none;
   }
   span.btnClass:hover{
      background-color: #000d1a;
      border: 1px solid #000;
      color: #fff;
   }
   span.btnClass:hover a{

   }
   h1{
      clear: both;
      font-size: 40px;
      text-align: center;
      text-transform: capitalize;
      color: #001a33;
      position: relative;
   }
   h1:after{
      content: "";
      background-color: #000d1a;
      height: 4px;
      width: 200px;
      position: absolute;
      left: 0;
      right:0;
      top:auto;
      bottom: -10px;
      margin: auto;
   }
   table{
      margin-top: 30px;
      width: 100%;
      border: 1px solid #000d1a;
      padding: 10px;
      text-align: center;
      border-collapse: collapse;
   }
    table td, table th{
      border: 1px solid #000d1a;
      padding: 10px;
    }
    table td{
      font-size: 16px;
    }
    table th{
      font-size: 18px;
    }
    table a{
        text-decoration: none;
        color:#ff0000;
    }
</style>
