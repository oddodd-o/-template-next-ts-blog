"use client"
import {useContext} from "react";
import {AuthContext} from "@/lib/firebase/AuthContext";

export const useAuth = () => useContext(AuthContext);