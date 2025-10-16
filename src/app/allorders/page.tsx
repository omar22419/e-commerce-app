import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "_/components/ui/table";
import { getMyOrders } from "./allorders.actions"
import { OrderType } from "../_interfaces/order.types";

export default async function Allorders() {
  async function myOrders(){
      const res = await getMyOrders();
      return res;
  }
    const orders = await myOrders();
    console.log('Ordersss',orders);
    return (
      <div className="w-3/4 mx-auto h-screen">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
                <TableBody>
            {orders.map((order:OrderType)=><>
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      {order.id}
                      </TableCell>
                    <TableCell>{order.paidAt}</TableCell>
                    <TableCell>{order.totalOrderPrice}</TableCell>
                    <TableCell>{order.paymentMethodType}</TableCell>
                    <TableCell>{order.isDelivered}</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
            </>
            )}
                </TableBody>  
        </Table>
      </div>
  )
}
