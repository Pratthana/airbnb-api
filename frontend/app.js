Vue.component(
    'button-counter', {
    template: '#counter-template',
    data() {
        return{
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        }

    }
}

)

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'SE Projects',
        projects: [
            'PSU Quiz',
            'Mooi',
            'Minework'
        ],
        show: true,
        url: 'http://www.google.com',
        todos: [],
        newtask: '',

    },
    methods: {
        toggleTitle() {
            this.show = !this.show
        },
        addTask() {   // เป็นการใส่ข้อมูลใน todo เรื่อยๆ 
            this.todos.push(this.newtask)
            this.newtask = ''

        },
        clearTask() {   // เป็นการล้างข้อมูล 
            this.todos = []

        },

    }
})