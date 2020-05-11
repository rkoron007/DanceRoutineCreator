const token = Rails.csrfToken();
import React from "react";

export const handleResponseJSON = (response) => {
  if (response.status >= 201) {
    return response.json().then((message) => {
      throw new Error(message);
    });
  }
  return response.json();
};

export const makePostRequest = (url, body) => {
  return fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json",
    },
    credentials: "same-origin",
  });
};

export const fetchRequest = (url) => {
  return fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json",
    },
    credentials: "same-origin",
  });
};

export const deleteRequest = (url) => {
  return fetch(`${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-Token": token,
      Accept: "application/json",
    },
    credentials: "same-origin",
  });
};

export const renderErrors = (errors) => {
  if (errors.length) {
    return (
      <ul className="render-errors">
        {errors.map((error, i) => (
          <li key={`${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
};
