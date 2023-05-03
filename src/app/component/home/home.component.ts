import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import * as CryptoJS from "crypto-js";
import * as JsEncryptModule from 'jsencrypt';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  frmGroup: any;
  dataSource: any;
  data: any;
  aesKey: any;
  secretKey: any;
  iv = '0000000000000000';
  encryptedDataByAes: any;
  rsaPublicKey: any;
  rsaPrivateKey: any;
  rsaMode: any;

  constructor(private formBuilder: FormBuilder,) {
    this.rsaMode = new JsEncryptModule.JSEncrypt();
    this.rsaPublicKey = this.rsaMode.getPublicKey();
    this.rsaPrivateKey = this.rsaMode.getPrivateKey();
  }

  ngOnInit(): void {
    this.frmGroup = this.formBuilder.group({
      aesKey: ['', Validators.required],
      rsaPublicKey: [this.rsaPublicKey],
      rsaPrivateKey: [this.rsaPrivateKey],
      invoiceData: ['', Validators.required],
      encryptedDataByAesKey: [''],
      decryptedDataByAesKey: [''],
      encryptedDataByRsaKey: [''],
      decryptedDataByRsaKey: [''],
    });
  }

  encryptDataByAesKey(): any {

    console.log(this.frmGroup.value.aesKey);

    // Create a Secret key By using password
    this.secretKey = CryptoJS.enc.Utf8.parse(this.frmGroup.value.aesKey);

    // Create a initialize vector By using 16 bytes character
    const iv = CryptoJS.enc.Utf8.parse(this.iv);

    // Encrypt the data using the key and IV
    this.encryptedDataByAes = CryptoJS.AES.encrypt(this.frmGroup.value.invoiceData, this.secretKey, {iv: iv}).toString();

    this.frmGroup.patchValue({
      encryptedDataByAesKey: this.encryptedDataByAes,
    });
  }


  decryptDataByAesKey(): any {
    // Create a Secret key By using password
    this.secretKey = CryptoJS.enc.Utf8.parse(this.frmGroup.value.aesKey);

    const iv = CryptoJS.enc.Utf8.parse(this.iv);

    // Decrypt the data using the key and IV
    const decryptedData = CryptoJS.AES.decrypt(this.frmGroup.value.decryptedDataByRsaKey, this.secretKey, {iv: iv}).toString(CryptoJS.enc.Utf8);

    this.frmGroup.patchValue({
      decryptedDataByAesKey: decryptedData,
    });
  }

  encryptDataByRsaKey(): any {
    this.rsaMode.setPublicKey(this.rsaPublicKey);
    const encryptedDataByRsaKey = this.rsaMode.encrypt(this.frmGroup.value.encryptedDataByAesKey);
    this.frmGroup.patchValue({
      encryptedDataByRsaKey: encryptedDataByRsaKey,
    });
  }

  decryptDataByRsaKey(): any {
    this.rsaMode.setPrivateKey(this.rsaPrivateKey);
    const encryptedDataByRsaKey = this.rsaMode.decrypt(this.frmGroup.value.encryptedDataByRsaKey);
    this.frmGroup.patchValue({
      decryptedDataByRsaKey: encryptedDataByRsaKey,
    });
  }
}
