<template>
  <div class="form">
    <H1 class="form__title">{{ formData.title }}</H1>
    <!-- <form @submit.prevent="handleFormSubmited" class="row"> -->
    <form
      action="https://webhikers.us1.list-manage.com/subscribe/post?u=d2b1d4cda59ceb603eb7f547c&id=4ea7202c02"
      method="POST"
      class="row"
      @submit="handleFormSubmited"
    >
      <div
        class="form__left col-md-6 d-flex justify-content-center flex-column"
      >
        <div class="form-group form__group">
          <Input
            @blur="handleOnBlur('firstname')"
            v-model="form.firstname"
            :disabled="isLoading"
            name="MERGE1"
            class="form__field form-control"
            :class="{
              'input-default--error': errors.firstname,
              'is-invalid': errors.firstname,
              'input-default--success': errors.firstname === false,
              'is-valid': errors.firstname === false
            }"
            type="text"
            :placeholder="formData.form_firstname_label"
          />
          <small
            id="firstname"
            v-if="errors.firstname"
            class="form-text text-danger"
          >
            {{ errors.firstname }}
          </small>
        </div>
        <div class="form-group form__group">
          <Input
            @blur="handleOnBlur('secondname')"
            v-model="form.secondname"
            name="MERGE2"
            :disabled="isLoading"
            class="form__field form-control"
            :class="{
              'input-default--error': errors.secondname,
              'is-invalid': errors.secondname,
              'input-default--success': errors.secondname === false,
              'is-valid': errors.secondname === false
            }"
            type="text"
            :placeholder="formData.form_surname_label"
          />
          <small
            id="firstname"
            v-if="errors.secondname"
            class="form-text text-danger"
          >
            {{ errors.secondname }}
          </small>
        </div>
        <div class="form-group form__group">
          <Input
            @blur="handleOnBlur('email')"
            v-model="form.email"
            name="MERGE0"
            :disabled="isLoading"
            class="form-control form__field"
            :class="{
              'input-default--error': errors.email,
              'is-invalid': errors.email,
              'input-default--success': errors.email === false,
              'is-valid': errors.email === false
            }"
            type="email"
            :placeholder="formData.form_email_label"
          />
          <small
            id="firstname"
            v-if="errors.email"
            class="form-text text-danger"
          >
            {{ errors.email }}
          </small>
        </div>
        <ButtonDefault
          :disabled="isLoading"
          type="submit"
          class="form__submit-button"
        >
          <span v-if="!isLoading">{{ formData.form_submit_label }}</span>
          <b-icon v-if="isLoading" icon="three-dots" animation="cylon"></b-icon>
        </ButtonDefault>
      </div>
      <div class="form__right col-md-6 d-flex justify-content-center">
        <div class="form__info pt-0 pt-md-0 pb-5 pb-md-0">
          <H2 class="form__subtitle">{{ formData.address_label }}</H2>
          <Paragraph class="form__address" :html="formData.address" />
          <EmailText class="form__email">{{ formData.email }}</EmailText>
          <span class="form__site">{{ formData.website }}</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import H1 from "@/components/ui/text/H1";
import H2 from "@/components/ui/text/H2";
import Paragraph from "@/components/ui/text/Paragraph";
import EmailText from "@/components/ui/text/EmailText";
import Input from "@/components/ui/form/Input";
import ButtonDefault from "@/components/ui/buttons/ButtonDefault";

export default {
  name: "FormSection",
  props: {
    formData: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      form: {
        firstname: "",
        secondname: "",
        email: ""
      },
      errors: {
        firstname: null,
        secondname: null,
        email: null
      },
      formIsDirty: false,
      formIsValid: false,
      mounted: false,
      isLoading: false
    };
  },
  components: {
    H1,
    H2,
    Paragraph,
    EmailText,
    Input,
    ButtonDefault
  },
  watch: {
    "form.firstname": function() {
      this.formIsDirty = true;
      this.errors.firstname = this.firstnameValidation();
      this.checkFormIsValid();
    },
    "form.secondname": function() {
      this.formIsDirty = true;
      this.errors.secondname = this.secondnameValidation();
      this.checkFormIsValid();
    },
    "form.email": function() {
      this.formIsDirty = true;
      this.errors.email = this.emailValidation();
      this.checkFormIsValid();
    }
  },
  methods: {
    async cleanForm(event) {
      // Do reset form
      event.target.reset();
      // Clean form
      this.clearFormFields();
      // Set form is not dirty
      this.formIsDirty = false;
      // Check form is valid
      await this.checkFormIsValid();
      // Do clear errors
      this.clearErrors();
    },
    showSuccessfulyToast(message) {
      this.$toasted.success(message, { position: "top-center" }).goAway(5000);
    },
    clearFormFields() {
      this.form.firstname = "";
      this.form.secondname = "";
      this.form.email = "";
    },
    clearErrors() {
      this.errors.firstname = null;
      this.errors.secondname = null;
      this.errors.email = null;
    },
    handleOnBlur(fieldName) {
      // Set form is dirty
      this.formIsDirty = true;
      // Validate field
      this.validateField(fieldName);
      // Do validate
      this.checkFormIsValid();
    },
    handleFormSubmited(e) {
      // Do validate form
      this.validateForm();

      if (
        this.errors.firstname ||
        this.errors.secondname ||
        this.errors.email
      ) {
        e.preventDefault();
      }
    },
    validateField(fieldName) {
      if (fieldName === "firstname") {
        this.errors.firstname = this.firstnameValidation();
      }
      if (fieldName === "email") {
        this.errors.email = this.emailValidation();
      }
      if (fieldName === "secondname") {
        this.errors.secondname = this.secondnameValidation();
      }
    },
    validateForm() {
      this.errors.firstname = this.firstnameValidation();
      this.errors.secondname = this.secondnameValidation();
      this.errors.email = this.emailValidation();
    },
    checkFormIsValid() {
      for (const key in this.errors) {
        if (this.errors[key] !== false && this.formIsDirty) {
          this.formIsValid = false;
          return;
        }
      }

      this.formIsValid = true;
    },
    // ----------------------------
    firstnameValidation() {
      if (this.$validatorService.isRequired(this.form.firstname)) {
        return "Firstname is required";
      }
      return false;
    },
    secondnameValidation() {
      if (this.$validatorService.isRequired(this.form.secondname)) {
        return "Secondname is required";
      }
      return false;
    },
    emailValidation() {
      if (this.$validatorService.isRequired(this.form.email)) {
        return "Email is required";
      } else if (!this.$validatorService.isEmail(this.form.email)) {
        return "Invalid Email address";
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 100%;

  &__left {
    min-height: 300px;
    height: 100%;
  }

  &__right {
    padding-top: 25px;
  }

  &__title {
    text-transform: lowercase;
    margin-bottom: 25px;
  }

  &__group {
    margin-bottom: 25px;
  }

  //   &__field {
  //   }

  &__submit-button {
    margin-top: 25px;
    width: 177px;
  }

  &__subtitle {
    margin-bottom: 25px;
  }

  &__address {
    margin-bottom: 25px;
    white-space: pre-line;
  }

  //   &__email {}

  &__site {
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: $textColor;
  }

  &__info {
    padding: 50px 0;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // width: max-content;
  }
}
</style>
