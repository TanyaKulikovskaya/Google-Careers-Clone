import axios from 'axios'

import type { Job } from '@/api/types'

const getJobs = async () => {
  const { data } = await axios.get<Job[]>('http://localhost:3000/jobs')
  return data
}

export default getJobs
