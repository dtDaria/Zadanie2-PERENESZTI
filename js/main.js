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
        review1: null,
        review2: null,

    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.review1 && this.review2) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    review1: this.review1,
                    review2: this.review2,
                }
                eventBus.$emit('review-submitted', productReview)
                this.name = null
                this.review = null
                this.review1 = null
                this.review2 = null
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
