<template>
  <div>
    <!-- <Select v-model="opt" multiple :items="states" /> -->
    <Accordion v-model="activeName" accordion>
      <AccordionItem name="1" title="task1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae, quis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestiae, quis.
        </p>
      </AccordionItem>
      <AccordionItem name="2" title="task2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae, quis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Molestiae, quis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae, quis.
        </p>
      </AccordionItem>
    </Accordion>

    <Collapse>
      <CollapseItem id="1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        consequuntur, aliquam enim quisquam rerum quia cumque optio nemo! Vel
        magnam quasi dolores tempore quam doloremque corrupti ad architecto aut
        sequi!
      </CollapseItem>
      <CollapseItem id="2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        consequuntur, aliquam enim quisquam rerum quia cumque optio nemo! Vel
        magnam quasi dolores tempore quam doloremque corrupti ad architecto aut
        sequi!
      </CollapseItem>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Select from "./components/Select.vue";
import Accordion from "./components/Accordion/Accordion.vue";
import AccordionItem from "./components/Accordion/AccordionItem.vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";

const opt = ref<string[]>([]);
const activeName = ref("1");

const faqs = [
  {
    title: "title1",
    content:
      "Molestiae, quis. Lorem ipsum dolor sit amet consectetur adipisicing",
  },
  {
    title: "title1",
    content:
      "Molestiae, quis. Lorem ipsum dolor sit amet consectetur adipisicing",
  },
];

const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
</script>

<style scoped></style>
