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
      
## template
    <div v-html = "htmlcontent"></div>           //adding html template with v-html
    <img v-bind:src = "imgsrc" width = "300" height = "250" />       //adding images with v-bind
    
    var vm = new Vue({
    el: '#vue_det',
    data: {
      firstname : "Ria",
      lastname  : "Singh",
      htmlcontent : "<div><h1>Vue Js Template</h1></div>"
      imgsrc: 'images/Ai.jpg'
    }
    })

      
      
