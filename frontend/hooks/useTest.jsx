import React, { useState, useEffect } from 'react';

export const useTest = (value = 1) => {
  return value * 2;
}