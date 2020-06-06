<template>
  <div class="container">
    <Form />
    <Table />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Table from "@/components/Table";
export default {
  name: "Provider",
  components: { Form, Table }
};
</script>
