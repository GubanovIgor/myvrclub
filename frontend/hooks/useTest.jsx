import React, { useState, useEffect } from 'react';

export const useTest = (value = 1) => {
  console.log(value)
  return value * 2;
}