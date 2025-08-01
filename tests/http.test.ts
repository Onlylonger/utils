import { describe, expect, test } from 'vitest'
import { httpStatus } from '../src'

describe('test common httpstatus msg', () => {
  test('should 200 exist and msg is ok', () => {
    expect(httpStatus[200]).toBeTruthy()
    expect(httpStatus[200].msg).toBe('OK')
  })

  test('should 201 exist and msg is Created', () => {
    expect(httpStatus[201]).toBeTruthy()
    expect(httpStatus[201].msg).toBe('Created')
  })

  test('should 301 exist and msg is Moved Permanently', () => {
    expect(httpStatus[301]).toBeTruthy()
    expect(httpStatus[301].msg).toBe('Moved Permanently')
  })

  test('should 400 exist and msg is Bad Request', () => {
    expect(httpStatus[400]).toBeTruthy()
    expect(httpStatus[400].msg).toBe('Bad Request')
  })

  test('should 401 exist and msg is Unauthorized', () => {
    expect(httpStatus[401]).toBeTruthy()
    expect(httpStatus[401].msg).toBe('Unauthorized')
  })

  test('should 403 exist and msg is Forbidden', () => {
    expect(httpStatus[403]).toBeTruthy()
    expect(httpStatus[403].msg).toBe('Forbidden')
  })

  test('should 404 exist and msg is Not Found', () => {
    expect(httpStatus[404]).toBeTruthy()
    expect(httpStatus[404].msg).toBe('Not Found')
  })

  test('should 405 exist and msg is Method Not Allowed', () => {
    expect(httpStatus[405]).toBeTruthy()
    expect(httpStatus[405].msg).toBe('Method Not Allowed')
  })

  test('should 408 exist and msg is Request Timeout', () => {
    expect(httpStatus[408]).toBeTruthy()
    expect(httpStatus[408].msg).toBe('Request Timeout')
  })

  test('should 429 exist and msg is Too Many Requests', () => {
    expect(httpStatus[429]).toBeTruthy()
    expect(httpStatus[429].msg).toBe('Too Many Requests')
  })

  test('should 500 exist and msg is Internal Server Error', () => {
    expect(httpStatus[500]).toBeTruthy()
    expect(httpStatus[500].msg).toBe('Internal Server Error')
  })

  test('should 502 exist and msg is Bad Gateway', () => {
    expect(httpStatus[502]).toBeTruthy()
    expect(httpStatus[502].msg).toBe('Bad Gateway')
  })

  test('should 503 exist and msg is Service Unavailable', () => {
    expect(httpStatus[503]).toBeTruthy()
    expect(httpStatus[503].msg).toBe('Service Unavailable')
  })

  test('should 504 exist and msg is Gateway Timeout', () => {
    expect(httpStatus[504]).toBeTruthy()
    expect(httpStatus[504].msg).toBe('Gateway Timeout')
  })
})
