// این فایل برای اکشنهای در Api-Handler  ایجاد شده است

import{createAction} from "@reduxjs/toolkit";
// این تایع نشان اغاز درخواس api  است
export const apiCallBegan=createAction("api/CallBegan")
// این اکشن در صورت خطا اجرا می شود
export const apiCallFailed=createAction("api/CallFailed")
// این اکشن در زمان  دریافت موفق اجرا می شود
export const apiCallSuccess=createAction("api/CallSuccess")