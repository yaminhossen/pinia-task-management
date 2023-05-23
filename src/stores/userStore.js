import { defineStore } from "pinia";

export default defineStore('userStore', {
    state: () => ({
        users: [
            {
                name: 'aaa',
                email: "t@g.com",
            }
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
        delete_user: function (index = 0) {
            this.users.splice(index, 1);
        }
    },
})