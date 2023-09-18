<template>
  <div class="header">
    <h1>{{ header }}</h1>
  </div>

  <!-- 1. Template Syntax -->
  <div>
    <!-- a. Text Interpolation -->
    <p>{{ message }}</p>

    <!-- b. Raw HTML [v-html] -->
    <p v-html="rawHTML"></p>

    <!-- c. Attribute Bindings [v-bind:id] -->
    <input :id="inputId" />

    <!-- d. JavaScript expressions inside syntax i.e.{{ }} -->
    <p>{{ calculateSum(2, 3) }}</p>
  </div>

  <!-- 2. Methods -->
  <button @click="incrementCounter">Increment</button>

  <!-- 3. Reactivity Fundamentals [ref(), <script setup>] -->
  <p>{{ count }}</p>

  <!-- 4. Computed Properties -->
  <p>{{ computedValue }}</p>

  <!-- 5. Class and Style Bindings -->
  <div :class="{ active: isActive }" :style="{ color: textColor }">
    Class and Style Binding
  </div>

  <!-- 6. List Rendering -->
  <ul>
    <!-- a. v-for with an Object (assuming 'items' is defined) -->
    <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>

    <!-- b. v-for with a Range -->
    <li v-for="n in 5" :key="n">{{ n }}</li>

    <!-- c. v-for on <template> -->
    <template v-for="item in items" :key="item.id">
      <p>{{ item.name }}</p>
    </template>

    <!-- d. v-for with v-if -->
    <li v-for="item in itemsWithCondition" :key="item.id">
      {{ item.name }}
    </li>

    <!-- e. v-for with a Component -->
    <custom-component
      v-for="item in items"
      :key="item.id"
      :item="item"
    ></custom-component>
  </ul>

  <!-- 7. Event Handling: Listening to Events [v-on:click] -->
  <button @click="handleClick">Click Me</button>

  <!-- 8. Form Input Bindings -->
  <input type="text" v-model="textInput" />
  <input type="checkbox" v-model="isChecked" />
  <input type="radio" v-model="selectedRadio" :value="1" />
  <select v-model="selectedOption">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <textarea v-model="textAreaInput"></textarea>

  <!-- 9. Watchers -->
  <p>{{ watchedValue }}</p>

  <!-- 10. Components -->
  <custom-component :prop-data="propData" @custom-event="handleCustomEvent">
    <template #slotName>
      Content in Slot
    </template>
  </custom-component>
  
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const header = ref('Composition API with single file components')

const message = ref('This is a text interpolation')

const rawHTML = ref('<span>This is Raw HTML</span>')

const inputId = ref('input1')

const calculateSum = (a, b) => {
  return a + b
}

const incrementCounter = () => {
  count.value++
}

const count = ref(0)

const computedValue = computed(() => {
  return count.value * 2
})

const isActive = ref(true)

const textColor = ref('red')

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
])

const itemsWithCondition = computed(() =>
  items.value.filter((item) => item.id % 2 === 0)
)

const textInput = ref('')

const isChecked = ref(false)

const selectedRadio = ref(1)

const selectedOption = ref('option1')

const textAreaInput = ref('')

const watchedValue = ref('')

watch(watchedValue, (newValue, oldValue) => {
  console.log(`Value changed from ${oldValue} to ${newValue}`)
})

const propData = ref('Data from parent')

const handleCustomEvent = (data) => {
  console.log(`Custom event received with data: ${data}`)
}
</script>