<template>
   <div>
        <form @submit = "submitForm">
        <h3>Login</h3>
        <div class="form-group">
            <label> Email</label>
            <input  v-model="$v.email2.$model"
                     @blur="$v.email2.$touch"
                    type="email"
                    class="form-control"
                    placeholder="Email"  
                 
            >
            <div v-if="!$v.email2.required" >email daxil edin</div>
            <span v-if="!$v.email2.email" color="#daa520">Sehv email</span>
        </div>
        <div class="form-group">
            <label> Password</label>
            <input  
                v-model="pass2" 
                type="password" 
                placeholder="Password" 
                class="form-control"
                >
            <span v-if="!$v.pass2.numeric" color="#daa520"
                  >shifre yalniz reqemlerden ibaret olmalidir</span
                >
                <span v-if="!$v.pass2.required" color="#daa520"
                  >bu input doldurulmalidir</span
                >
                <span v-if="!$v.pass2.minLength" color="#daa520"
                  >shifre {{ $v.pass2.$params.minLength.min }} xarakterden az
                  olmamalidir</span
                >
                <span v-if="!$v.pass2.maxLength"
                  >shifre {{ $v.pass2.$params.maxLength.max }} xarakterden
                  cox olmamalidir</span
                >
            <div v-if="!$v.pass2.required" class="invalid-feedback">The password field is required</div>

        </div>
      
        <button class="btn btn-primary btn-block">Login</button>
    </form>
    <div v-if="checkData" class="checkData mt-4">
        <button type="button"  class="btn btn-warning ">
        Yanlis istifadeci melumatlari daxil etdiniz
        </button>
    </div>
    
   </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import store from '../vuex'
export default {
    name:'Login',
    data(){
        return{
            email2:'',
            pass2:'',
            checkData:false
        }
    },
    computed:{
        
        email(){
            return store.state.email;
        },
        pass(){
            return store.state.pass;
        },
        logOut(){
            return store.state.logOut
        }
    },
    methods:{
        updateUser(e){
            store.commit("updateUser", e.target.value)
        },
        submitForm() {
            if(this.email !== this.email2 || this.pass !== this.pass2 ){
                this.checkData = true  
            }
            
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error){
                return;
            }
            store.dispatch("updateUser", {
                email2: this.email2,
                pass2: this.pass2
            });
        },
    },
        validations:{
            email2:{
                required,
                email,
            },
            pass2:{
               required,
                numeric,
                minLength: minLength(6),
                maxLength: maxLength(8), 
            }
        }
   
    }

</script>
