var app = new Vue({
  el: '#app',
  data: {
    todos: [
    'my first todo items',
    'my second todo items',
    'my third to do item',
    'washing cloths'
    ],

    item:'To do item'
  },
  methods: {
  	addTodo(){
  		this.todos.push(this.item)
  		this.item='';

  	}
  }
})