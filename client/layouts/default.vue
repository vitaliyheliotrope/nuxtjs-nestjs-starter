<template>
  <v-layout>
    <client-only>
      <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </client-only>

    <v-app-bar title="Application bar"></v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
