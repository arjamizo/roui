<template>
  <div class="flex flex-col">
    <h2>Zestaw pól złączonych do tej samej sekcji</h2>
    <div>Opis wprowadzający do zestawu pól. (...)</div>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <roui-input label="Etykieta pola tekstowego" info="Opis dodatkowy celem wyjaśnienia lub podpowiedzi"/>
        <roui-input label="Kolejne pole wymagane" required/>
        <roui-input label="Pole numeryczne z etykietą" suffix="zł"/>
        <label class="flex flex-col">
          Dołączyć dane predefiniowane?
          <div>
            <input type="checkbox" class="toggle toggle-lg" v-model="addData" defaultChecked/>
            {{addData ? 'tak' : 'nie'}}
          </div>          
        </label>
      </div>
      <div class="flex flex-col">
        <roui-input label="Etykieta z wypełnieniem" defaultValue="Wypełnione przez aplikanta"/>
        <fieldset class="flex flex-col">
          <legend>To jest etykieta standardowego selektora typu checkbox:</legend>
          <label><input type="checkbox"> To jest pierwsze pole wyboru</label>
          <label><input type="checkbox"> To jest drugie pole wyboru</label>
          <label><input type="checkbox" checked v-model="cb3"> To jest zaznaczone pole wyboru</label>
          <label><input type="checkbox" disabled> To jest niedostępne, ponieważ poprzednie zostało wybrane</label>
          <label><input type="checkbox" checked> To pole było zaznaczone przez administrator w domyśle</label>
          <div>
            <span class="material-icons info text-[#bfbfbf]">info</span>
            <span>Administrator ma możliwość określenia (lub nie)...</span>
          </div>
        </fieldset>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <span>Pole predefinionwane z bazy danych użytkownika</span>
        <roui-input label="Imię" required v-bind="addData ? {value: 'Łukasz', readonly: 1} : {}"/>
      </div>
      <div class="flex flex-col">
        <span>Pole predefinionwane z bazy danych użytkownika</span>
        <roui-input label="Nazwisko" required v-bind="addData ? {value: 'Marcinkiewicz', readonly: 1} : {}"
          info="Pole dowolnego formularza można łączyć(...)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { RouiInput } from '../components/Input.vue'

export const FormViewStory = defineComponent({
  inheritAttrs: false,
  components: {
    RouiInput,
  },
  data() {
    return {
      addData: false,
      cb3: true,
    }
  },
})

export default FormViewStory
</script>
