'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Loader2 } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export function StackedBar(props: {
  labels: {
    title: string;
    description: React.ReactNode;
    xAxes: string;
    yAxes: string;
    footer: React.ReactNode;
  };
  chartConfig: ChartConfig;
  data: any[];
  style?: {
    height?: string;
  };
  isLoading?: boolean;
  error?: Error | null;
  onBarClick?: (data: any) => void;
  className?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.labels.title}</CardTitle>
        <CardDescription>{props.labels.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.isLoading && (
          <div className='flex h-[300px] items-center justify-center'>
            <Loader2 className='h-8 w-8 animate-spin text-muted-foreground' />
          </div>
        )}
        {props.error && (
          <div className='flex h-[300px] items-center justify-center'>
            <p className='text-destructive'>Failed to load chart data</p>
          </div>
        )}
        {!props.isLoading && !props.error && (
          <ResponsiveContainer width='100%' height={props.style?.height ?? 300}>
            <ChartContainer config={props.chartConfig}>
              <BarChart
                accessibilityLayer
                data={props.data}
                layout='vertical'
                margin={{
                  left: 0,
                }}
              >
                <YAxis
                  dataKey={props.labels.yAxes}
                  type='category'
                  tickLine={false}
                  tickMargin={10}
                  width={100}
                  // widths={'auto'}
                  axisLine={false}
                  tickFormatter={(value) =>
                    // @ts-ignore
                    props.chartConfig[value as keyof typeof props.chartConfig]
                      ?.label || value
                  }
                />
                <XAxis dataKey={props.labels.xAxes} type='number' hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Bar
                  dataKey={props.labels.xAxes}
                  layout='vertical'
                  radius={5}
                  onClick={(data) => props.onBarClick?.(data)}
                  cursor={props.onBarClick ? 'pointer' : 'default'}
                />
              </BarChart>
            </ChartContainer>
          </ResponsiveContainer>
        )}
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        {props.labels.footer}
      </CardFooter>
    </Card>
  );
}
