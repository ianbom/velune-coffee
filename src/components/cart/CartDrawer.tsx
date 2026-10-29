"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag, ArrowRight, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatIDR } from "@/data/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
    freeShippingThreshold,
    freeShippingProgress,
    clearCart,
  } = useCart();

  const [orderNote, setOrderNote] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isOpen) return null;

  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      setTimeout(() => {
        clearCart();
        setOrderSuccess(false);
        closeCart();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#F8F1EC] text-velune-charcoal flex flex-col shadow-2xl border-l border-velune-border">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velune-border">
            <div className="flex items-center space-x-2">
              <span className="text-[14px] uppercase tracking-[0.16em] font-medium">Your Bag</span>
              <span className="text-[12px] text-velune-muted">({itemCount})</span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-velune-charcoal hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3.5 bg-[#F1E9E2] border-b border-velune-border text-[12px]">
            {remainingForFreeShipping > 0 ? (
              <p className="text-velune-charcoal mb-2">
                Add <span className="font-semibold">{formatIDR(remainingForFreeShipping)}</span> more for complimentary domestic shipping
              </p>
            ) : (
              <p className="text-velune-charcoal mb-2 font-medium flex items-center gap-1.5 text-emerald-800">
                <Check className="w-3.5 h-3.5" /> Complimentary domestic shipping unlocked
              </p>
            )}
            <div className="w-full bg-[#E2DAD2] h-1 rounded-full overflow-hidden">
              <div
                className="bg-velune-charcoal h-full transition-all duration-500 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {orderSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-12 h-12 rounded-full bg-emerald-900/10 flex items-center justify-center text-emerald-900 mb-4">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-lg font-medium mb-1">Order Received</h3>
                <p className="text-xs text-velune-muted max-w-xs mb-4">
                  Thank you for supporting specialty coffee craftsmanship. A confirmation receipt has been simulated.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <ShoppingBag className="w-10 h-10 stroke-[1] text-velune-muted mb-4 opacity-60" />
                <p className="text-[15px] font-medium mb-1">Your bag is empty</p>
                <p className="text-[13px] text-velune-muted mb-6 max-w-[240px]">
                  Explore our seasonal coffee selections, roasted lightly to honor their origins.
                </p>
                <Link
                  href="/collections/coffee"
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] px-6 py-3 bg-velune-charcoal text-white hover:bg-black transition-colors"
                >
                  Explore Coffees <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6 divide-y divide-velune-border">
                {items.map((item) => (
                  <div key={item.id} className="pt-6 first:pt-0 flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-24 bg-stone-200 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-[14px] font-medium leading-tight">
                            <Link
                              href={`/products/${item.product.slug}`}
                              onClick={closeCart}
                              className="hover:underline"
                            >
                              {item.product.name}
                            </Link>
                          </h4>
                          <span className="text-[13px] font-medium ml-2">
                            {formatIDR(item.unitPrice * item.quantity)}
                          </span>
                        </div>

                        <p className="text-[11px] text-velune-muted mt-1 uppercase tracking-wider">
                          {item.selectedWeight} • {item.selectedGrind}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Stepper */}
                        <div className="flex items-center border border-velune-border bg-white text-xs">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-stone-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-stone-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[11px] text-velune-muted hover:text-velune-charcoal underline underline-offset-2 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Special instructions */}
                <div className="pt-6">
                  <label htmlFor="order-note" className="block text-[11px] uppercase tracking-[0.12em] text-velune-muted mb-2">
                    Order Note / Roasting Request
                  </label>
                  <textarea
                    id="order-note"
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Specific roast date or delivery notes..."
                    rows={2}
                    className="w-full text-[12px] bg-white border border-velune-border p-2.5 focus:outline-none focus:border-velune-charcoal resize-none placeholder:text-stone-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && !orderSuccess && (
            <div className="border-t border-velune-border bg-[#F1E9E2] px-6 py-5 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-[13px] uppercase tracking-[0.14em] text-velune-muted">Subtotal</span>
                <span className="text-base font-semibold">{formatIDR(subtotal)}</span>
              </div>
              <p className="text-[11px] text-velune-muted">
                Taxes and shipping calculated at checkout. Orders roasted fresh twice weekly.
              </p>
              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 bg-velune-charcoal text-white hover:bg-black text-[12px] uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isCheckingOut ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
