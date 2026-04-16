import {Component, computed, signal} from '@angular/core';
import {ProductCard} from '../product-card/product-card';
import {Product} from '../product';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {map} from 'rxjs';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon, MatFormField, MatLabel, FormsModule, MatInput],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    { id: 1, name: "Smartphone X12", description: "6.5-inch display, 128GB storage, 48MP camera", price: 499.99, originalPrice: 699.99 },
    { id: 2, name: "Wireless Headphones", description: "Noise cancellation, 20h battery life, Bluetooth 5.0", price: 79.99, originalPrice: 129.99 },
    { id: 3, name: "UltraWide Monitor 29", description: "29-inch curved, Full HD, 75Hz refresh rate", price: 259.99, originalPrice: 319.99 },
    { id: 4, name: "Gaming Mouse RGB", description: "7 programmable buttons, 6400 DPI, RGB lighting", price: 29.99 },
    { id: 5, name: "Mechanical Keyboard", description: "Blue switches, backlit, USB-C", price: 59.99, originalPrice: 89.99 },
    { id: 6, name: "1TB NVMe SSD", description: "Read 3500MB/s, write 3000MB/s, M.2 interface", price: 109.99, originalPrice: 149.99 },
    { id: 7, name: "4K Action Camera", description: "Waterproof up to 30m, image stabilization, Wi-Fi", price: 199.99, originalPrice: 299.99 },
    { id: 8, name: "USB-C Hub", description: "7 ports: HDMI, USB 3.0, Ethernet, SD card reader", price: 45.99 },
    { id: 9, name: "Wireless Charger", description: "15W fast charging, compatible with all Qi devices", price: 24.99, originalPrice: 39.99 },
    { id: 10, name: "Laptop Backpack", description: "Water-resistant, 17-inch capacity, USB charging port", price: 49.99, originalPrice: 79.99 },
    { id: 11, name: "Smart Watch Pro", description: "Heart rate monitor, GPS, 5-day battery life", price: 149.99, originalPrice: 229.99 },
    { id: 12, name: "External Hard Drive", description: "2TB storage, USB 3.0, plug-and-play", price: 79.99 },
    { id: 13, name: "Webcam Full HD", description: "1080p, autofocus, built-in microphone", price: 59.99, originalPrice: 89.99 },
    { id: 14, name: "Gaming Chair", description: "Ergonomic, reclinable, with lumbar support", price: 189.99, originalPrice: 279.99 },
    { id: 15, name: "Portable Speaker", description: "10W output, IPX7 waterproof, 12h playtime", price: 39.99 },
    { id: 16, name: "Drawing Tablet", description: "10x6 inch active area, 8192 pressure levels", price: 129.99, originalPrice: 179.99 },
    { id: 17, name: "Smart Plug", description: "Wi-Fi enabled, voice control with Alexa and Google", price: 14.99, originalPrice: 24.99 },
    { id: 18, name: "USB Microphone", description: "Cardioid pattern, studio quality, with pop filter", price: 69.99, originalPrice: 99.99 },
    { id: 19, name: "VR Headset", description: "110° FOV, 90Hz refresh rate, motion controllers", price: 299.99 },
    { id: 20, name: "Cable Management Box", description: "Hide power strips and cables, anti-slip rubber feet", price: 19.99, originalPrice: 29.99 }
  ])

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if (!term) return this.products();

    return this.products().filter((product) =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  protected clearSearch() {
    this.searchTerm.set('');
  }

  protected trimSearch() {
    this.searchTerm.update((value) => value.trim());
  }
}
