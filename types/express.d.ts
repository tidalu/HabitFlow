declare global {
  namespace Express {
    export interface Request {
      customProperty?: string
      method: string
      url: string
      userId: string
    }
  }
}

export {}
