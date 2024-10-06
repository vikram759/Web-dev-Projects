"use client"
import { SessionProvider } from "next-auth/react"
import React from "react";

import { useState,useEffect } from "react";

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>
    

    {children} 
    
    </SessionProvider>
  );
}

export default SessionWrapper;
