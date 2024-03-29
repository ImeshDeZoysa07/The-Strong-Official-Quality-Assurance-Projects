/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package UserInterfaceLayer;

import BusinessLogicLayer.Customer;
import BusinessLogicLayer.DataManager;
import BusinessLogicLayer.Validations;
import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author arsalan
 */
public class ViewCustomers extends javax.swing.JPanel {

    Validations validation;
    DataManager dataManager;
    ArrayList<Customer> customers;

    /**
     * Creates new form ViewCustomers
     */
    public ViewCustomers() {
        initComponents();
        validation = new Validations();
        dataManager = DataManager.getInstance();
        updateCustomersTable();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel13 = new javax.swing.JPanel();
        btnExportCustomer = new javax.swing.JButton();
        jScrollPane3 = new javax.swing.JScrollPane();
        tblViewCustomer = new javax.swing.JTable();
        btnRefresh = new javax.swing.JButton();

        jPanel13.setLayout(null);

        btnExportCustomer.setText("Export To Excel");
        btnExportCustomer.setToolTipText("Save Records to Excel File");
        btnExportCustomer.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnExportCustomerActionPerformed(evt);
            }
        });
        jPanel13.add(btnExportCustomer);
        btnExportCustomer.setBounds(260, 450, 250, 40);

        tblViewCustomer.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {

            },
            new String [] {
                "ID", "NAME", "CNIC", "ADDRESS", "Phone_Number"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.Integer.class
            };
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane3.setViewportView(tblViewCustomer);

        jPanel13.add(jScrollPane3);
        jScrollPane3.setBounds(10, 10, 970, 430);

        btnRefresh.setText("Refresh");
        btnRefresh.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnRefreshActionPerformed(evt);
            }
        });
        jPanel13.add(btnRefresh);
        btnRefresh.setBounds(560, 450, 210, 40);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 1067, Short.MAX_VALUE)
            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(layout.createSequentialGroup()
                    .addGap(0, 0, Short.MAX_VALUE)
                    .addComponent(jPanel13, javax.swing.GroupLayout.PREFERRED_SIZE, 1067, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(0, 0, Short.MAX_VALUE)))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 505, Short.MAX_VALUE)
            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                .addGroup(layout.createSequentialGroup()
                    .addGap(0, 0, Short.MAX_VALUE)
                    .addComponent(jPanel13, javax.swing.GroupLayout.PREFERRED_SIZE, 505, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGap(0, 0, Short.MAX_VALUE)))
        );
    }// </editor-fold>//GEN-END:initComponents

    private void btnExportCustomerActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnExportCustomerActionPerformed
        // TODO add your handling code here:
        dataManager.exportDataToExcel(tblViewCustomer, "Customer");
    }//GEN-LAST:event_btnExportCustomerActionPerformed

    private void btnRefreshActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnRefreshActionPerformed
        // TODO add your handling code here:
        updateCustomersTable();
    }//GEN-LAST:event_btnRefreshActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnExportCustomer;
    private javax.swing.JButton btnRefresh;
    private javax.swing.JPanel jPanel13;
    private javax.swing.JScrollPane jScrollPane3;
    private javax.swing.JTable tblViewCustomer;
    // End of variables declaration//GEN-END:variables

    /**
     * Function to update table of customer
     */
    public void updateCustomersTable() {
        customers = dataManager.getCustomerManager().getCustomers();
        String[] tableColumnsName = {"Name", "Phone Number", "Cnic", "Address"};
        DefaultTableModel aModel = (DefaultTableModel) tblViewCustomer.getModel();
        aModel.setRowCount(0);
        aModel.setColumnIdentifiers(tableColumnsName);
        Customer customer;

        for (int i = 0; i < customers.size(); i++) {
            customer = customers.get(i);
            Object[] objects = new Object[4];
            objects[0] = customer.getName();
            objects[1] = customer.getNumber();
            objects[2] = customer.getCnic();
            objects[3] = customer.getAddress();
            aModel.addRow(objects);
        }
        tblViewCustomer.setModel(aModel);
    }
}
