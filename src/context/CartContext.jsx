/**
 * @file CartContext.jsx
 * @brief Context per gestionar el "cart" d'activitats seleccionades.
 *
 * La idea és tenir una sola font de veritat (state global) per afegir/treure activitats.
 */
import React, { createContext, useContext, useMemo, useReducer } from "react";

function cartReducer(state, action) {
  // Reducer simple per controlar quantitats i accions.
  if (action.type === "ADD") {
    const activity = action.payload;
    const currentQty = state.items[activity.id]?.qty || 0;

    return {
      ...state,
      items: {
        ...state.items,
        [activity.id]: { activity: activity, qty: currentQty + 1 },
      },
    };
  }

  if (action.type === "REMOVE") {
    const id = action.payload;
    const current = state.items[id];
    if (!current) return state;

    if (current.qty <= 1) {
      const nextItems = { ...state.items };
      delete nextItems[id];
      return { ...state, items: nextItems };
    }

    return {
      ...state,
      items: {
        ...state.items,
        [id]: { activity: current.activity, qty: current.qty - 1 },
      },
    };
  }

  if (action.type === "CLEAR") {
    return { ...state, items: {} };
  }

  return state;
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} });

  const api = useMemo(() => {
    // API del context: accions i selectors.
    function add(activity) {
      dispatch({ type: "ADD", payload: activity });
    }

    function remove(activityId) {
      dispatch({ type: "REMOVE", payload: activityId });
    }

    function clear() {
      dispatch({ type: "CLEAR" });
    }

    function getLineItems() {
      return Object.values(state.items);
    }

    function getTotalCount() {
      return getLineItems().reduce(function (acc, line) {
        return acc + line.qty;
      }, 0);
    }

    function getTotalPriceEUR() {
      return getLineItems().reduce(function (acc, line) {
        return acc + line.qty * (line.activity.priceEUR || 0);
      }, 0);
    }

    return {
      items: state.items,
      add: add,
      remove: remove,
      clear: clear,
      getLineItems: getLineItems,
      getTotalCount: getTotalCount,
      getTotalPriceEUR: getTotalPriceEUR,
    };
  }, [state.items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>.");
  }
  return ctx;
}
