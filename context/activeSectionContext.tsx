"use client"

import React, { createContext, useContext, useState } from 'react'
import type { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from '@/lib/types'

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}> 
        {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const ctx = useContext(ActiveSectionContext)

    if (ctx === null) {
        throw new Error(
            "useActiveSectionContext must be used within ActiveSectionContextProvider"
        )
    }

    return ctx
}