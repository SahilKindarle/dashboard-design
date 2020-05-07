<template>
  <div class="ok">
    <div class="row">
      <div class="container con">
        <div class="col s12 valign-wrapper">
          <div class="form">
            <div class="input-field">
              <input type="text" id="NAME" placeholder="NAME" />
            </div>
            <div class="input-field">
              <input type="text" id="location" placeholder="LOCATION" />
              <div class="form2">
                BUILDING:
                <div class="input-field inline">
                  <input type="text" id="BUILDING" />
                </div>
                <BR />FLOOR:
                <div class="input-field inline">
                  <input type="text" id="FLOOR" />
                </div>
                <BR />
                <div class="checkboxx">
                  TOILET:
                  <label class="o">
                    <input type="checkbox" class="ch" />
                    <span class="m">MALE</span>
                  </label>
                  <label>
                    <input type="checkbox" class="ch" />
                    <span class="f">FEMALE</span>
                  </label>
                </div>DATE:
                <div class="col s10 offset-s1">
                  <input type="text" class="datepicker" placeholder="Datepicker" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from 'jquery'
// mounted() {

// }
</script>
<style scoped>
#NAME {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  /* width: auto; */
}
#location {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
}
#FLOOR {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 15px;
  box-sizing: border-box;
  font-size: 14px;
  width: 150px;
  text-align: center;
  /* padding-left: 15px; */
}
#BUILDING {
  border-radius: 15px;
  background: #f2f2f2;
  margin: 0 0 0px;
  box-sizing: border-box;
  font-size: 14px;
  width: 150px;
  /* border-left-width: 20px; */
  text-align: center;
  margin-right: 15px;
}
.form {
  margin: 0 auto;
  padding-top: 75px;
  width: 400px;
  height: 100vh;
  background-color: rgb(211, 212, 212);
}
.o {
  padding-left: 23px;
}
.f {
  color: rgb(44, 62, 80);
}
.m {
  padding-right: 15px;
  color: rgb(44, 62, 80);
}
</style>
$('.datepicker').pickadate();
Vue.component('datepicker',{
	template: "<input />",
	mounted: function(e) {
		let vm = this;
		$(this.$el).pickadate({
			onSet: function(){
				
				let ob = {}; 
				ob[vm.$el.name] = vm.$el.value;
				
				
				vm.$parent.data = Object.assign({}, vm.$parent.data, ob);
			}
		});
	}
});


let vm = new Vue({
	el: "#app",
	data: {
		data: {}, /* Data container !important property for form data */
	},
	
	computed: {
		dataob: function() {
			return JSON.stringify(this.data);
		}
	},
	watch: {
		data: function(val) {
			this.dataob = JSON.stringify(this.data);
		}
	}
});