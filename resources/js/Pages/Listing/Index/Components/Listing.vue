<template>
  <Box>
    <div>
      <Link
        :href="route('listing.show', {listing: listing.id})"
      >
        <div class="flex items-center gap-1">
          <Price
            :price="listing.price"
            class="text-2xl font-bold"
          />
          <div class="text-xs text-gray-500">
            <Price :price="monthlyPayment" /> pm
          </div>
        </div>
        <ListingSpace :listing="listing" class="text-lg" />
        <ListingAddress
          :listing="listing"
          class="text-gray-500"
        />
      </Link>
    </div>
    <div class="mt-3 flex items-center gap-3">
  <Link
    :href="route('listing.edit', { listing: listing.id })"
    class="no-underline text-indigo-600 hover:text-indigo-500"
  >
    Edit
  </Link>

  <Link
    :href="route('listing.destroy', { listing: listing.id })"
    method="DELETE"
    as="button"
    class="text-red-500 hover:text-red-400"
  >
    Delete
  </Link>
</div>
  </Box>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'
import ListingAddress from '@/Components/ListingAddress.vue'
import Box from '@/Components/UI/Box.vue'
import ListingSpace from '@/Components/ListingSpace.vue'
import Price from '@/Components/Price.vue'
import { useMonthlyPayment } from '@/Composables/useMonthlyPayment'

const props = defineProps({listing: Object})
const { monthlyPayment } = useMonthlyPayment(
  props.listing.price, 2.5, 25,
)
</script>