import Product from '../interfaces/ProductInterface'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { ChartProps } from '../../types/main-types'
import '../../styles/main/Chart.scss'
import { useState, useEffect, useLayoutEffect } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Chart = ({ products }: ChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          minRotation: 70,
        },
      },
    },
  }

  const labels = products.map((product: Product) => product.title)

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: products.map((product: Product) => product.price),
        borderColor: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(255, 255, 255)',
      },
      {
        label: 'Discounted price',
        data: products.map(
          (product: Product) => product.discountedPrice / product.quantity
        ),
        borderColor: 'rgb(7, 154, 128)',
        backgroundColor: 'rgb(7, 154, 128)',
      },
    ],
  }

  return (
    <div className='chart'>
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart
