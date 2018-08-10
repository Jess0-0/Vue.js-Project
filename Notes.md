# Notes

## Instances

    var app = new Vue({
       // options
    })
    
## data
    
    var Component = Vue.extend({
            data: function () {
               return _obj
            }
         });
         
## props
         
    Vue.component('props-demo-advanced', {
      props: {
      // just type check
      height: Number,
      
      // type check plus other validations
      age: {
         type: Number,
         default: 0,
         required: true,
         validator: function (value) {
            return value >= 0
         }
      }
      }
      })
