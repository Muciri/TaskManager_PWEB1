export const uid = () => { return Date.now().toString(36) + Math.random().toString(36).slice(2,7) };

export const addDaysISO = (n:number) => {
  const d = new Date()
  d.setDate(d.getDate()+n)
  return d.toISOString().slice(0,10)
}

export interface Task {
  id: string, 
  title: string, 
  due: string, 
  level: 'high' | 'medium' | 'low',
  desc: string, 
  status: 'todo' | 'doing' | 'done'
};