export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      calendar: {
        Row: {
          comment: string | null
          created_at: string
          day: number | null
          id: number
          month: number | null
          title: string | null
          year: number | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          day?: number | null
          id?: number
          month?: number | null
          title?: string | null
          year?: number | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          day?: number | null
          id?: number
          month?: number | null
          title?: string | null
          year?: number | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
