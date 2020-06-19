<template>
  <div class="container">
    <Form />
    <Table />
    <Navbar />
  </div>
</template>

<script>
import Form from "@/components/Form";
import Table from "@/components/Table";
import Navbar from "@/components/Navbar";
export default {
  name: "Provider",
  components: { Form, Table, Navbar }
};
</script>
