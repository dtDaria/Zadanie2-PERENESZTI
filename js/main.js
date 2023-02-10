let eventBus = new Vue()

let app = new Vue({

    el: '#app',
    data: {
        cart: [],
       popis1: [],
       popis2: [],
       popis3: [],
        name:null,
        review: null,

    },
    methods: {
        onSubmit() {
            if (this.name && this.review) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
            }
        },
    },
    mounted() {
        eventBus.$on('review-submitted', productReview => {
            this.popis1.push(productReview)
            if (this.popis1.length > 3) {
                this.popis1.pop(productReview)

                this.popis2.push(productReview)
                if (this.popis2.length > 5) {
                    this.popis2.pop(productReview)

                    this.popis3.push(productReview)
                }
            }
        })
    },
})
