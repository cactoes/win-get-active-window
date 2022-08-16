interface window {
  app: string
  title: string
}

export async function getActiveWindow(repeats?: number = 1, interval?: number = 0): Promise<window>