<template>
  <div class="container">
      <h1>Edit Contact</h1>
        <form @submit.prevent="validateBeforeSubmit">
            <div class="fieldset">
              <input type="text" name="name" v-model="newcontact.name" v-validate="'alpha_spaces'" placeholder="Your Name">
              <span v-show="errors.has('first_name')" class="help is-danger">{{ errors.first('first_name') }}</span>
            </div>
            <div class="fieldset">
               <input type="email" name="email" v-model="newcontact.email" v-validate="'required|email'" placeholder="Your Email">
               <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
             </div>
            <div class="fieldset">
               <input name="phone" v-model="newcontact.phone" v-validate="'numeric'" type="text" placeholder="Phone">
               <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
            </div>
            <div class="fieldset">
              <textarea v-model="newcontact.address" placeholder="Address"></textarea>
            </div>
             <p class="control">
                <button type="submit">Submit</button>
            </p>
         </form>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
   data : function() {
    return {
       contacts: [],
       newcontact : {}
     }
   },

   mounted: function() {
    this.contacts = JSON.parse(Vue.ls.get('contacts')) || [];
    this.newcontact = this.contacts[this.$route.params.id - 1];
  },

  methods : {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
            Vue.ls.set('contacts', JSON.stringify(this.contacts));
            location.href = '/';
        }
      });
    }
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
   h1{
      text-align: center;
   }
   form{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50%;
    /*box-shadow: 0px 2px 14px rgba(15, 117, 49, 0.28);*/
    padding: 20px;
    margin-top: 4%;
  }
  form > div{
    width: 100%;
  }
  input, textarea{
    border:1px solid #eee;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
    text-indent: 10px;
  }
  input{
    height: 50px;
  }
  span.help{
    color:#ff0000;
  }
  textarea{
    height: 150px;
  }
  button{
    max-width: 220px;
    display: block;
    margin: auto;
    background-color: #030303;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    padding: 0 20px;
    border: 1px solid #000;
  }
  button:hover{
    background-color: #0e0e0e;
  }
</style>
