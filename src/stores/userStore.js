import axios from "axios";
import { defineStore } from "pinia";

export default defineStore('userStore', {
    state: () => ({
        users: [
            {
                name: 'aaa',
                email: "t@g.com",
            },
            {
                name: 'bbb',
                email: "b@b.com",
            },
        ],
        user: {},
    }),
    getters: {
        count: (state) => state.users.length,
    },
    actions: {
        /**
         * 
         * @param {{name: String, email: String}} user 
         */
        add_user: function (user = {}) {
            this.users.push(user);
        },
        /**
         * 
         * @param {Number} index 
         */
        delete_user: async function (id) {
            await axios.delete('http://localhost:5000/users/'+id)
            this.fetch_users();
        },
        clear_users: async function(){
            await axios.delete('http://localhost:5000/users/')
            this.fetch_users();
        },
        fetch_users:async function(){
            let users = await axios.get('http://localhost:5000/users')
            this.users = users.data;
        },
        find_user:async function(id){
            let user = await axios.get('http://localhost:5000/user/'+id)
            this.user = user.data;
        },
        save_data: function(event){
            console.log(event);
            let data = new FormData(event.target);
            // fetch("http://localhost:5007/users",{
            //     method: "POST",
            //     body: data,
            //     headers: {
            //         "Content-Type": "application/x-www-form-urlencoded"

            //     }
            // })
            console.log(data);
            axios.post('http://localhost:5000/save',data)
                .then((res)=>{
                    console.log(res.data);
                    this.users.push(res.data);
                })
        }
    },
})