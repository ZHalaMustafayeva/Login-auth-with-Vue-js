<template>
    <form @submit.prevent = "submitForm">
        <!-- <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div> -->
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
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
    name:'Login',
    data(){
        return{
            email2:'',
            pass2:''
        }
    },
    computed:{
        email(){
            return this.$store.state.email;
        },
        pass(){
            return this.$store.state.pass;
        }
    },
    methods:{
        validationStatus(validation){
            return typeof validation != 'undefined' ? validation.$error : false;
        },
        updateUser(e){
            this.$store.commit("updateUser", e.target.value)
        },
    
        submitForm() {
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error){
                return;
            }
            this.$store.dispatch("updateUser", {
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