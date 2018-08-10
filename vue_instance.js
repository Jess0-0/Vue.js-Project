var vm = new Vue({
	el: "#vue_det",
	data: {
		firstname: "Jiayao",
		lastname: "Wang",
		address: "Nashville"
	},
	methods: {
		mydetails: function() {
			return "My name is " + this.firstname + " " + this.lastname + ". My major is Math and Computer Science!"
		}
	}
});