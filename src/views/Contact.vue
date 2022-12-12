<template>
    <section class="workspace">       
        <div class="container">           
            <div class="row">
                <div class="col-lg-7 offset-lg-2 col-md-8">
                    <h1>CONTACT ME</h1>
                </div>                
                <div class="col-lg-7 offset-lg-2 col-md-8">
                    <form id="contact-form" class="row contact-form" action="#">
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">                                
                                <input id="name" placeholder="Enter your name" class="form-control"
                                    v-model="contactForm.name">
                                <i class="material-icons check">check_circle</i>
                                <i class="material-icons error">error</i>
                                <small>Error message</small>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">
                                <input id="email" type="email" name="email" placeholder="Your email address"
                                    class="form-control" v-model="contactForm.email">
                                <i class="material-icons check">check_circle</i>
                                <i class="material-icons error">error</i>
                                <small>Error message</small>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">
                                <input id="phone" name="phone" placeholder="(123) 456-7890" class="form-control"
                                    v-model="contactForm.phone">
                                <i class="material-icons check">check_circle</i>
                                <i class="material-icons error">error</i>
                                <small>Error message</small>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <div class="form-group">
                                <textarea id="message" name="message" placeholder="Write your message"
                                    class="form-control" v-model="contactForm.message">
                                </textarea>
                                <i class="material-icons check">check_circle</i>
                                <i class="material-icons error">error</i>
                                <small>Error message</small>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12">
                            <button type="submit" class="btn button-field" @click.prevent="formSubmit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                    <article v-show="showSubmitFeedback">
                        <div class="message-body" v-bind:style="{ color: responseColor }">
                            {{ submitResponse }}
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    mounted() {
        this.selectors.form = document.getElementById('contact-form');
        this.selectors.name = document.getElementById('name');
        this.selectors.email = document.getElementById('email');
        this.selectors.phone = document.getElementById('phone');
        this.selectors.message = document.getElementById('message');
    },
    data: () => {
        return {
            selectors: {
                form: '',
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            showSubmitFeedback: false,
            errors: [],
            ALPHA_REGEX: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,
            EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            PHONE_REGEX: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            contactForm: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            submitResponse: '',
            responseColor: 'var(--success)'
        }
    },
    methods: {
        formSubmit() {
            this.showSubmitFeedback = false;
            this.errors = [];
            if (this.validate()) {
                this.submitForm()
                    .then((result) => {
                        this.showSubmitFeedback = true;
                        console.log(result);
                        if (result.name) {
                            this.responseColor = 'var(--primary)';
                            this.submitResponse = `Message Id : ${result.name}. Thank you for contacting me. Your message is received, I will connect with you at the earliest.`;
                        } else {
                            this.responseColor = 'var(--error)';
                            this.submitResponse = 'Oops, its not your fault. Its me!. Seems like Firebase rules is not relaxed. Please try again later';
                        }
                    })
                    .catch(error => {
                        this.showSubmitFeedback = true;
                        this.submitResponse = 'Oops, its not your fault. Its me. Please try again later';
                    });
            }
        },

        validate() {
            const nameError = this.validateText(this.selectors.name, this.contactForm.name, 'Name');
            const emailError = this.validateEmail(this.selectors.email, this.contactForm.email, 'Email');
            const phoneError = this.validatePhone(this.selectors.phone, this.contactForm.phone, 'Phone');
            const mesError = this.validateText(this.selectors.message, this.contactForm.message, 'Message');
            return !nameError && !emailError && !mesError && !phoneError;
        },

        validateText(field, value, name) {
            let error;
            if (value === '') {
                error = this.setErrorFor(field, name + ' cannot be blank');
            } else if (value.length < 2) {
                error = this.setErrorFor(field, name + ' minimum length should be 2');
            } else if (!value.match(this.ALPHA_REGEX)) {
                error = this.setErrorFor(field, name + ' must contain only alphabets');
            } else {
                error = this.setSuccessFor(field);
            }
            return error;
        },

        validateEmail(field, value, name) {
            let error;
            if (value === '') {
                error = this.setErrorFor(field, name + ' cannot be blank');
            } else if (!value.match(this.EMAIL_REGEX)) {
                error = this.setErrorFor(field, name + ' is not valid');
            } else {
                error = this.setSuccessFor(field);
            }
            return error;
        },

        validatePhone(field, value, name) {
            let error;
            if (value === '') {
                error = this.setErrorFor(field, name + ' cannot be blank');
            } else if (!value.match(this.PHONE_REGEX)) {
                error = this.setErrorFor(field, name + ' is not valid');
            } else {
                error = this.setSuccessFor(field);
            }
            return error;
        },

        setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-group success';
            return false;
        },

        setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-group error';
            small.innerText = message;
            return true;
        },

        async submitForm() {
            const url = 'https://amit-portfolio-64ecf-default-rtdb.firebaseio.com/contact.json';
            const http_req_headers = {
                'Cache-control': 'no-cache',
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: http_req_headers,
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                body: JSON.stringify(this.contactForm)
            });
            return response.json();
        }

    }
}
</script>
<style>
.contact-left {
    font-size: 1.4em;
}

.button-field {
    background-color: var(--primary);
    color: var(--shade)
}

.message-body {
    padding: 20px;
}

.form-group input:focus {
    border-color: var(--primary);
}

.form-group.success input {
    border-color: var(--success);
}

.form-group.error input {
    border-color: var(--error);
}

.form-group.success textarea {
    border-color: var(--success);
}

.form-group.error textarea {
    border-color: var(--error);
}

.form-group i {
    visibility: hidden;
    position: absolute;
    top: 5px;
    right: 20px;
}

.form-group.success i.check {
    color: var(--success);
    visibility: visible;
}

.form-group.error i.error {
    color: var(--error);
    visibility: visible;
}

.form-group small {
    color: var(--error);
    visibility: hidden;
}

.form-group.error small {
    visibility: visible;
    padding: 10px;
}

@media screen and (max-width: 759px) {
    .contact-form {
        margin-top: 20px;
    }
}
</style>